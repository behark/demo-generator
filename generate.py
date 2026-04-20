#!/usr/bin/env python3
"""
Demo website generator for Apex Agency outreach.

Usage:
  ./generate.py --name "Aksesore Kristali" --category jewelry \
      --phone "+383 49 425 565" --city Prizren \
      --address "Edit Durham, Prizren 20000"

What it does:
  1. Loads category preset from presets.yaml
  2. Copies template/ to dist/<slug>/
  3. Substitutes {{TOKENS}} across all files
  4. Installs deps, builds, deploys to Vercel (unless --no-deploy)
  5. Prints production URL
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import unicodedata
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Missing PyYAML. Install with: pip install pyyaml", file=sys.stderr)
    sys.exit(1)


ROOT = Path(__file__).resolve().parent
TEMPLATE_DIR = ROOT / "template"
DIST_DIR = ROOT / "dist"
PRESETS_FILE = ROOT / "presets.yaml"

# File extensions that go through token substitution
TEXT_EXTS = {".tsx", ".ts", ".jsx", ".js", ".json", ".css", ".mjs", ".md", ".html"}


def slugify(name: str) -> str:
    """Convert business name to URL-safe slug."""
    n = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    n = n.lower()
    n = re.sub(r"[^a-z0-9]+", "-", n).strip("-")
    return n or "demo"


def parse_phone(phone: str) -> dict:
    """
    Accepts '+383 49 425 565' or '049 425 565' or '+377 45 920 921'.
    Returns {intl_digits, intl_formatted, local}.
    """
    raw = phone.strip()
    digits = re.sub(r"\D", "", raw)

    if raw.startswith("+"):
        intl_digits = digits
        # Albanian/Kosovar formatting: +XXX XX XXX XXX
        if len(digits) >= 11:
            cc, rest = digits[:3], digits[3:]
            if len(rest) == 8:
                intl_formatted = f"{cc} {rest[:2]} {rest[2:5]} {rest[5:]}"
            else:
                intl_formatted = f"{cc} {rest}"
        else:
            intl_formatted = digits
        # Local form: strip country code, prepend 0
        local_digits = digits[3:] if len(digits) > 9 else digits
        if len(local_digits) == 8:
            local = f"0{local_digits[:2]} {local_digits[2:5]} {local_digits[5:]}"
        else:
            local = f"0{local_digits}"
    else:
        # Local-format input: assume Kosovo +383
        if digits.startswith("0"):
            digits = digits[1:]
        intl_digits = "383" + digits
        intl_formatted = f"383 {digits[:2]} {digits[2:5]} {digits[5:]}" if len(digits) == 8 else f"383 {digits}"
        local = f"0{digits[:2]} {digits[2:5]} {digits[5:]}" if len(digits) == 8 else f"0{digits}"

    return {"intl_digits": intl_digits, "intl_formatted": intl_formatted, "local": local}


def build_tokens(args, preset: dict, palette: dict) -> dict:
    """Merge business args + category preset + palette into a flat token dict."""
    phone = parse_phone(args.phone)
    name = args.name.strip()
    parts = name.split(" ", 1)
    name_main = parts[0]
    name_tail = parts[1] if len(parts) > 1 else ""

    address_parts = [p.strip() for p in args.address.split(",")]
    addr_line_1 = address_parts[0] if address_parts else args.city
    addr_line_2 = ", ".join(address_parts[1:]) if len(address_parts) > 1 else args.city

    maps_q = f"{name}, {args.address}".replace(" ", "+")
    maps_embed = f"https://www.google.com/maps?q={maps_q}&output=embed"

    tokens = {
        # Business core
        "BUSINESS_NAME": name,
        "BUSINESS_NAME_MAIN": name_main,
        "BUSINESS_NAME_TAIL": name_tail,
        "BUSINESS_INITIAL": name[0].upper() if name else "A",
        "PROJECT_SLUG": slugify(name),
        "CITY": args.city,
        # Phone
        "PHONE_INTL_DIGITS": phone["intl_digits"],
        "PHONE_INTL_FORMATTED": phone["intl_formatted"],
        "PHONE_LOCAL": phone["local"],
        # Address
        "ADDRESS_LINE_1": addr_line_1,
        "ADDRESS_LINE_2": addr_line_2,
        "MAPS_EMBED_URL": maps_embed,
        # Hours — sensible Kosovo default, overridable via preset
        "HOURS_WEEKDAY": "08:00 – 20:00",
        "HOURS_SATURDAY": "08:00 – 18:00",
        "HOURS_SUNDAY": "Mbyllur",
        # Meta
        "META_TITLE": f"{name} · {args.city}",
        "META_DESCRIPTION": f"{name} — {args.city}. Na telefononi në {phone['local']} ose na shkruani në WhatsApp.",
        "OG_DESCRIPTION": f"{name} në {args.city}",
        # CTA defaults
        "CTA_PRIMARY_LABEL": "Na Kontaktoni",
        # Stats section — sensible defaults usable by every preset
        "STATS_EYEBROW": "Pse na zgjedhin",
        "STATS_QUOTE_MAIN": "Cilësi që flet",
        "STATS_QUOTE_ITALIC": "vetë për vete.",
        "STATS_PILL_1_LABEL": "Kënaqësia e klientit",
        "STATS_PILL_1_VALUE": "100%",
        "STATS_PILL_2_LABEL": "Saktësi",
        "STATS_PILL_2_VALUE": "100%",
        "STATS_PILL_3_LABEL": "Përvoja",
        "STATS_PILL_3_VALUE": "100%",
        # Booking section — generic defaults
        "BOOKING_EYEBROW": "Rezervo",
        "BOOKING_TITLE_MAIN": "Rezervo online",
        "BOOKING_TITLE_ITALIC": "shpejt dhe thjesht.",
        "BOOKING_DESCRIPTION": "Plotësoni formularin dhe ne ju kontaktojmë në WhatsApp për të konfirmuar terminin që ju përshtatet më së miri.",
        "BOOKING_SERVICE_OPTIONS": "Konsultim|Shërbim standard|Shërbim premium",
        "BOOKING_SUBMIT_LABEL": "Dërgo në WhatsApp",
    }

    # Palette wins over defaults
    tokens.update(palette)
    # Category preset wins over palette for its own keys (copy)
    for k, v in preset.items():
        if k == "palette":
            continue
        tokens[k] = v

    return tokens


def substitute(text: str, tokens: dict) -> str:
    def replace(match):
        key = match.group(1)
        return str(tokens.get(key, match.group(0)))
    return re.sub(r"\{\{([A-Z0-9_]+)\}\}", replace, text)


def copy_and_substitute(src: Path, dst: Path, tokens: dict) -> None:
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns("node_modules", ".next", ".vercel", "out"))
    for path in dst.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in TEXT_EXTS:
            continue
        try:
            raw = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        new = substitute(raw, tokens)
        if new != raw:
            path.write_text(new, encoding="utf-8")


def run(cmd: list[str], cwd: Path, check: bool = True) -> subprocess.CompletedProcess:
    print(f"  $ {' '.join(cmd)}")
    return subprocess.run(cmd, cwd=cwd, check=check)


def deploy(project_dir: Path, slug: str) -> str | None:
    """Run npm install + vercel deploy. Returns production URL or None."""
    run(["npm", "install"], project_dir)
    # Link to a new vercel project non-interactively
    run(["vercel", "link", "--yes", "--project", slug], project_dir, check=False)
    result = subprocess.run(
        ["vercel", "deploy", "--prod", "--yes", "--archive=tgz"],
        cwd=project_dir, capture_output=True, text=True,
    )
    print(result.stdout)
    if result.returncode != 0:
        print(result.stderr, file=sys.stderr)
        return None
    # Last URL-looking line is the production URL
    urls = re.findall(r"https?://[^\s]+\.vercel\.app", result.stdout)
    return urls[-1] if urls else None


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--name", required=True, help='Business name e.g. "Aksesore Kristali"')
    p.add_argument("--category", required=True, help="Category key from presets.yaml")
    p.add_argument("--phone", required=True, help='Phone e.g. "+383 49 425 565"')
    p.add_argument("--city", required=True, help='City e.g. "Prizren"')
    p.add_argument("--address", required=True, help='Full address')
    p.add_argument("--slug", default=None, help="Override project slug")
    p.add_argument("--no-deploy", action="store_true", help="Skip npm install + vercel deploy")
    p.add_argument("--dump-tokens", action="store_true", help="Print resolved tokens and exit")
    args = p.parse_args()

    with PRESETS_FILE.open() as f:
        data = yaml.safe_load(f)

    if args.category not in data["categories"]:
        print(f"Unknown category '{args.category}'. Available: {list(data['categories'])}", file=sys.stderr)
        return 2

    preset = data["categories"][args.category]
    palette_key = preset.get("palette")
    palette = data["palettes"].get(palette_key, {})

    tokens = build_tokens(args, preset, palette)
    if args.slug:
        tokens["PROJECT_SLUG"] = args.slug

    if args.dump_tokens:
        print(json.dumps(tokens, indent=2, ensure_ascii=False))
        return 0

    slug = tokens["PROJECT_SLUG"]
    out = DIST_DIR / slug
    DIST_DIR.mkdir(exist_ok=True)

    print(f"→ Generating {slug} from template")
    copy_and_substitute(TEMPLATE_DIR, out, tokens)
    print(f"✓ Written to {out}")

    if args.no_deploy:
        print("Skipping deploy (--no-deploy).")
        return 0

    print(f"→ Deploying {slug} to Vercel")
    url = deploy(out, slug)
    if url:
        print(f"\n✓ LIVE: {url}\n")
        return 0
    print("Deploy did not report a URL — inspect logs above.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
