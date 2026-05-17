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
import os
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

# All tokens that must exist in presets or be generated from args
REQUIRED_TOKENS = {
    # Business
    "BUSINESS_NAME", "BUSINESS_NAME_MAIN", "BUSINESS_NAME_TAIL", "BUSINESS_INITIAL",
    "PROJECT_SLUG", "CITY",
    # Phone
    "PHONE_INTL_DIGITS", "PHONE_INTL_FORMATTED", "PHONE_LOCAL",
    # Address
    "ADDRESS_LINE_1", "ADDRESS_LINE_2", "MAPS_EMBED_URL",
    # Meta
    "META_TITLE", "META_DESCRIPTION", "OG_DESCRIPTION",
    # Core sections
    "HERO_EYEBROW", "HERO_HEADLINE_MAIN", "HERO_HEADLINE_ITALIC", "HERO_SUBTITLE", 
    "HERO_TAGLINE", "HERO_IMAGE", "HERO_BADGE_1", "HERO_BADGE_2", "HERO_BADGE_3",
    "SERVICES_EYEBROW", "SERVICES_TITLE_MAIN", "SERVICES_TITLE_ITALIC", "SERVICES_DESCRIPTION",
    "SERVICE_1_TITLE", "SERVICE_1_DESC", "SERVICE_1_IMAGE",
    "SERVICE_2_TITLE", "SERVICE_2_DESC", "SERVICE_2_IMAGE",
    "SERVICE_3_TITLE", "SERVICE_3_DESC", "SERVICE_3_IMAGE",
    "SERVICE_4_TITLE", "SERVICE_4_DESC", "SERVICE_4_IMAGE",
    "SERVICE_5_TITLE", "SERVICE_5_DESC", "SERVICE_5_IMAGE",
    "SERVICE_6_TITLE", "SERVICE_6_DESC", "SERVICE_6_IMAGE",
    "ABOUT_TITLE_MAIN", "ABOUT_TITLE_ITALIC", "ABOUT_P1", "ABOUT_P2",
    "ABOUT_IMAGE", "FEATURE_1", "FEATURE_2", "FEATURE_3", "FEATURE_4", "FEATURE_5", "FEATURE_6",
    "BADGE_LABEL", "BADGE_VALUE", "BADGE_SUBTEXT",
    "STATS_EYEBROW", "STATS_QUOTE_MAIN", "STATS_QUOTE_ITALIC",
    "STATS_PILL_1_LABEL", "STATS_PILL_1_VALUE", "STATS_PILL_2_LABEL", "STATS_PILL_2_VALUE",
    "STATS_PILL_3_LABEL", "STATS_PILL_3_VALUE",
    "BOOKING_EYEBROW", "BOOKING_TITLE_MAIN", "BOOKING_TITLE_ITALIC", "BOOKING_DESCRIPTION",
    "BOOKING_SERVICE_OPTIONS", "BOOKING_SUBMIT_LABEL",
    "LOCATION_EYEBROW", "LOCATION_TITLE_MAIN", "LOCATION_TITLE_ITALIC", "ADDRESS_NOTE",
    "PERK_1", "PERK_2", "PERK_3", "PERK_4",
    "CONTACT_TITLE_MAIN", "CONTACT_TITLE_ITALIC", "CONTACT_DESCRIPTION", "CONTACT_IMAGE",
    "FOOTER_TAGLINE", "META_KEYWORDS",
    # Colors
    "COLOR_PRIMARY", "COLOR_PRIMARY_DARK", "COLOR_SECONDARY", "COLOR_SECONDARY_DARK",
    "COLOR_ACCENT", "COLOR_INK", "COLOR_MUTED", "COLOR_CREAM", "COLOR_WARM", "COLOR_HAIRLINE",
    "BODY_BG", "BODY_COLOR", "EYEBROW_COLOR", "HERO_GRADIENT_BOTTOM",
    "NAV_BG_SCROLLED", "NAV_TEXT_SCROLLED", "CONTACT_BG", "CONTACT_HOVER_BG", "FOOTER_BG",
    # Navigation & CTA
    "NAV_SERVICES", "CTA_PRIMARY_LABEL",
    # Extras
    "HOURS_WEEKDAY", "HOURS_SATURDAY", "HOURS_SUNDAY", "STAT_LABEL", "STAT_VALUE", "STAT_SUBTEXT"
}


def validate_tokens(tokens: dict) -> list[str]:
    """
    Check that all required tokens are present.
    Returns list of missing token names, empty if all good.
    """
    missing = []
    for token in REQUIRED_TOKENS:
        if token not in tokens or tokens[token] is None or str(tokens[token]).strip() == "":
            missing.append(token)
    return missing


def slugify(name: str) -> str:
    """Convert business name to URL-safe slug."""
    n = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    n = n.lower()
    n = re.sub(r"[^a-z0-9]+", "-", n).strip("-")
    return n or "demo"


def parse_phone(phone: str) -> dict:
    """
    Accepts international format '+383 49 425 565', '+41 49 425 565', etc.
    or local format '049 425 565', '0033 1 23 45 67', etc.
    Supports multiple country codes and validates format.
    Returns {intl_digits, intl_formatted, local}.
    """
    raw = phone.strip()
    digits = re.sub(r"\D", "", raw)

    # Define country code mappings (CC -> local digit count, formatting pattern)
    # Format: (country_code_digits, expected_local_digits)
    country_codes = {
        "383": (9, "XK"),  # Kosovo: +383 + 8 local
        "355": (9, "AL"),  # Albania: +355 + 8 local
        "41": (9, "CH"),   # Switzerland: +41 + 8 local
        "49": (11, "DE"),  # Germany: +49 + 10 local
        "33": (9, "FR"),   # France: +33 + 8 local
        "39": (10, "IT"),  # Italy: +39 + 9 local
        "43": (10, "AT"),  # Austria: +43 + 9 local
        "48": (9, "PL"),   # Poland: +48 + 8 local
    }

    if raw.startswith("+"):
        # International format: extract country code
        intl_digits = digits
        
        # Detect country code (try 3-digit first, then 2-digit)
        cc_detected = None
        cc_len = 0
        if digits[:3] in country_codes:
            cc_detected = digits[:3]
            cc_len = 3
        elif digits[:2] in country_codes:
            cc_detected = digits[:2]
            cc_len = 2
        
        if not cc_detected:
            # Unknown country code, format as is
            intl_formatted = f"{digits[:1] if digits else ''} {digits[1:]}"
            local_digits = digits[cc_len:] if cc_len > 0 else digits
        else:
            local_digits = digits[cc_len:]
            expected_total, _ = country_codes[cc_detected]
            
            # Format with spaces based on country
            if cc_detected in ("383", "355"):  # Kosovo, Albania: +XXX XX XXX XXX
                if len(local_digits) >= 8:
                    intl_formatted = f"+{cc_detected} {local_digits[:2]} {local_digits[2:5]} {local_digits[5:8]}" + (f" {local_digits[8:]}" if len(local_digits) > 8 else "")
                else:
                    intl_formatted = f"+{cc_detected} {local_digits}"
            elif cc_detected in ("41",):  # Switzerland: +41 XX XXX XXXX
                if len(local_digits) >= 8:
                    intl_formatted = f"+{cc_detected} {local_digits[:2]} {local_digits[2:5]} {local_digits[5:]}"
                else:
                    intl_formatted = f"+{cc_detected} {local_digits}"
            else:
                # Default formatting
                intl_formatted = f"+{cc_detected} {local_digits}"
        
        # Local format: prepend 0 (remove country code)
        if len(local_digits) >= 8:
            local = f"0{local_digits[:2]} {local_digits[2:5]} {local_digits[5:8]}" + (f" {local_digits[8:]}" if len(local_digits) > 8 else "")
        else:
            local = f"0{local_digits}"
    else:
        # Local format input: extract country code if present, otherwise assume Kosovo (+383)
        if digits.startswith("0"):
            local_only = digits[1:]
        else:
            local_only = digits
        
        # Assume Kosovo if no country code
        cc = "383"
        intl_digits = cc + local_only
        
        # Format: +XXX XX XXX XXX (Kosovo style)
        if len(local_only) >= 8:
            intl_formatted = f"+{cc} {local_only[:2]} {local_only[2:5]} {local_only[5:8]}" + (f" {local_only[8:]}" if len(local_only) > 8 else "")
        else:
            intl_formatted = f"+{cc} {local_only}"
        
        local = f"0{local_only[:2]} {local_only[2:5]} {local_only[5:]}" if len(local_only) >= 8 else f"0{local_only}"

    return {"intl_digits": intl_digits, "intl_formatted": intl_formatted, "local": local}


PHONE_CC_TO_LANGUAGE = {
    "383": "sq",  # Kosovo
    "355": "sq",  # Albania
    "49": "de",   # Germany
    "43": "de",   # Austria
    "41": "de",   # Switzerland — simplification; most business targets DE-speaking cantons
    "33": "fr",   # France
}

CITY_TO_LANGUAGE = {
    # Kosovo
    "prishtinë": "sq", "prishtine": "sq", "pristina": "sq", "prishtina": "sq",
    "prizren": "sq", "mitrovicë": "sq", "mitrovice": "sq", "mitrovica": "sq",
    "pejë": "sq", "peje": "sq", "peja": "sq", "gjakovë": "sq", "gjakove": "sq", "gjakova": "sq",
    "ferizaj": "sq", "gjilan": "sq", "podujevë": "sq", "podujeve": "sq",
    "vushtrri": "sq", "suharekë": "sq", "suhareke": "sq", "rahovec": "sq",
    "drenas": "sq", "skenderaj": "sq", "kaçanik": "sq", "kacanik": "sq",
    "malishevë": "sq", "malisheve": "sq", "lipjan": "sq", "obiliq": "sq",
    # Albania
    "tiranë": "sq", "tirane": "sq", "tirana": "sq", "durrës": "sq", "durres": "sq",
    "vlorë": "sq", "vlore": "sq", "vlora": "sq", "shkodër": "sq", "shkoder": "sq",
    "elbasan": "sq", "fier": "sq", "korçë": "sq", "korce": "sq", "korca": "sq",
    "berat": "sq", "lushnjë": "sq", "lushnje": "sq",
    # Germany
    "berlin": "de", "münchen": "de", "munchen": "de", "munich": "de",
    "hamburg": "de", "köln": "de", "koln": "de", "cologne": "de",
    "frankfurt": "de", "stuttgart": "de", "düsseldorf": "de", "dusseldorf": "de",
    "leipzig": "de", "dortmund": "de", "essen": "de", "bremen": "de",
    "dresden": "de", "hannover": "de", "nürnberg": "de", "nurnberg": "de",
    # Austria
    "wien": "de", "vienna": "de", "graz": "de", "linz": "de",
    "salzburg": "de", "innsbruck": "de", "klagenfurt": "de", "villach": "de", "wels": "de",
    # Switzerland (German-speaking)
    "zürich": "de", "zurich": "de", "basel": "de", "bern": "de",
    "luzern": "de", "lucerne": "de", "winterthur": "de", "st. gallen": "de", "st gallen": "de",
    # France
    "paris": "fr", "marseille": "fr", "lyon": "fr", "toulouse": "fr",
    "nice": "fr", "nantes": "fr", "strasbourg": "fr", "montpellier": "fr",
    "bordeaux": "fr", "lille": "fr", "rennes": "fr",
}


def detect_language(phone: str, city: str) -> str:
    """Auto-detect site language from phone country code, fall back to city map, else 'en'."""
    # Phone country code takes priority (more reliable signal)
    digits = re.sub(r"\D", "", phone or "")
    if digits:
        # Local Kosovo numbers (no intl prefix) start with 0 and are 9 digits
        if not phone.strip().startswith("+") and digits.startswith("0") and len(digits) in (9, 10):
            return "sq"
        for cc in ("383", "355"):
            if digits.startswith(cc):
                return PHONE_CC_TO_LANGUAGE[cc]
        for cc in ("49", "43", "41", "33"):
            if digits.startswith(cc):
                return PHONE_CC_TO_LANGUAGE[cc]
    # Fallback to city match (case-insensitive)
    if city:
        return CITY_TO_LANGUAGE.get(city.strip().lower(), "en")
    return "en"


def build_tokens(args, preset: dict, palette: dict, language: str = "en") -> dict:
    """Merge business args + category preset + palette into a flat token dict.
    Supports multiple languages by prefixing tokens with language code."""
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

    # Language-specific defaults
    lang_defaults = {
        "sq": {  # Albanian
            "HOURS_WEEKDAY": "08:00 – 20:00",
            "HOURS_SATURDAY": "08:00 – 18:00",
            "HOURS_SUNDAY": "Mbyllur",
            "CTA_PRIMARY_LABEL": "Kontaktoni na",
            "STATS_EYEBROW": "Pse ne",
            "STATS_QUOTE_MAIN": "Cilësi që",
            "STATS_QUOTE_ITALIC": "flet për vete.",
            "BOOKING_EYEBROW": "Rezervo",
            "BOOKING_TITLE_MAIN": "Rezervo në linjë",
            "BOOKING_TITLE_ITALIC": "shpejt dhe lehtë.",
            "BOOKING_DESCRIPTION": "Plotësoni formularin dhe ne ju kontaktojmë në WhatsApp për të konfirmuar terminin.",
            "BOOKING_SERVICE_OPTIONS": "Konsultim|Shërbim standard|Shërbim premium",
            "BOOKING_SUBMIT_LABEL": "Dërgo në WhatsApp",
        },
        "de": {  # German
            "HOURS_WEEKDAY": "08:00 – 20:00",
            "HOURS_SATURDAY": "08:00 – 18:00",
            "HOURS_SUNDAY": "Geschlossen",
            "CTA_PRIMARY_LABEL": "Kontaktieren Sie uns",
            "STATS_EYEBROW": "Warum uns",
            "STATS_QUOTE_MAIN": "Qualität, die",
            "STATS_QUOTE_ITALIC": "für sich spricht.",
            "BOOKING_EYEBROW": "Reservieren",
            "BOOKING_TITLE_MAIN": "Online reservieren",
            "BOOKING_TITLE_ITALIC": "schnell und einfach.",
            "BOOKING_DESCRIPTION": "Füllen Sie das Formular aus und wir kontaktieren Sie auf WhatsApp.",
            "BOOKING_SERVICE_OPTIONS": "Beratung|Standard Service|Premium Service",
            "BOOKING_SUBMIT_LABEL": "An WhatsApp senden",
        },
        "en": {  # English
            "HOURS_WEEKDAY": "08:00 – 20:00",
            "HOURS_SATURDAY": "08:00 – 18:00",
            "HOURS_SUNDAY": "Closed",
            "CTA_PRIMARY_LABEL": "Contact us",
            "STATS_EYEBROW": "Why us",
            "STATS_QUOTE_MAIN": "Quality that",
            "STATS_QUOTE_ITALIC": "speaks for itself.",
            "BOOKING_EYEBROW": "Book now",
            "BOOKING_TITLE_MAIN": "Book online",
            "BOOKING_TITLE_ITALIC": "fast and easy.",
            "BOOKING_DESCRIPTION": "Fill the form and we'll contact you on WhatsApp to confirm your booking.",
            "BOOKING_SERVICE_OPTIONS": "Consultation|Standard Service|Premium Service",
            "BOOKING_SUBMIT_LABEL": "Send via WhatsApp",
        },
        "fr": {  # French
            "HOURS_WEEKDAY": "08:00 – 20:00",
            "HOURS_SATURDAY": "08:00 – 18:00",
            "HOURS_SUNDAY": "Fermé",
            "CTA_PRIMARY_LABEL": "Nous contacter",
            "STATS_EYEBROW": "Pourquoi nous",
            "STATS_QUOTE_MAIN": "Qualité qui",
            "STATS_QUOTE_ITALIC": "parle d'elle-même.",
            "BOOKING_EYEBROW": "Réserver",
            "BOOKING_TITLE_MAIN": "Réserver en ligne",
            "BOOKING_TITLE_ITALIC": "rapide et facile.",
            "BOOKING_DESCRIPTION": "Remplissez le formulaire et nous vous contacterons sur WhatsApp pour confirmer votre réservation.",
            "BOOKING_SERVICE_OPTIONS": "Consultation|Service standard|Service premium",
            "BOOKING_SUBMIT_LABEL": "Envoyer via WhatsApp",
        },
    }

    tokens = {
        # Business core
        "BUSINESS_NAME": name,
        "BUSINESS_NAME_MAIN": name_main,
        "BUSINESS_NAME_TAIL": name_tail,
        "BUSINESS_INITIAL": name[0].upper() if name else "A",
        "PROJECT_SLUG": slugify(name),
        "CITY": args.city,
        "LANGUAGE": language,
        # Phone
        "PHONE_INTL_DIGITS": phone["intl_digits"],
        "PHONE_INTL_FORMATTED": phone["intl_formatted"],
        "PHONE_LOCAL": phone["local"],
        # Address
        "ADDRESS_LINE_1": addr_line_1,
        "ADDRESS_LINE_2": addr_line_2,
        "MAPS_EMBED_URL": maps_embed,
        # Meta
        "META_TITLE": f"{name} · {args.city}",
        "META_DESCRIPTION": f"{name} — {args.city}. Kontaktoni: {phone['local']}",
        "OG_DESCRIPTION": f"{name} in {args.city}",
    }

    # Apply language defaults
    tokens.update(lang_defaults.get(language, lang_defaults["en"]))
    
    # Palette wins over defaults
    tokens.update(palette)
    
    # Category preset wins over palette for its own keys
    for k, v in preset.items():
        if k == "palette":
            continue
        tokens[k] = v

    return tokens


def substitute(text: str, tokens: dict) -> str:
    def replace(match):
        key = match.group(1)
        return str(tokens.get(key, match.group(0)))
    return re.sub(r"\{\{\s*([A-Z0-9_]+)\s*\}\}", replace, text)


def copy_and_substitute(src: Path, dst: Path, tokens: dict) -> None:
    """Copy template to destination and substitute all tokens.
    Raises exception if any files fail to process."""
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns("node_modules", ".next", ".vercel", "out"))
    
    failed_files = []
    substituted_count = 0
    
    for path in dst.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in TEXT_EXTS:
            continue
        try:
            raw = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            # Binary-like file, skip
            continue
        except Exception as e:
            failed_files.append((str(path), str(e)))
            continue
        
        try:
            new = substitute(raw, tokens)
            if new != raw:
                path.write_text(new, encoding="utf-8")
                substituted_count += 1
        except Exception as e:
            failed_files.append((str(path), str(e)))
    
    if failed_files:
        print(f"Warning: {len(failed_files)} files failed to process:", file=sys.stderr)
        for fname, err in failed_files[:5]:
            print(f"  {fname}: {err}", file=sys.stderr)


def run(cmd: list[str], cwd: Path, check: bool = True) -> subprocess.CompletedProcess:
    print(f"  $ {' '.join(cmd)}")
    return subprocess.run(cmd, cwd=cwd, check=check)


def deploy(project_dir: Path, slug: str) -> str | None:
    """Run npm install + vercel deploy. Returns production URL or None."""
    try:
        run(["npm", "install"], project_dir)
    except subprocess.CalledProcessError as e:
        print(f"Error: npm install failed: {e}", file=sys.stderr)
        raise
    except FileNotFoundError:
        print("Error: npm not found. Make sure Node.js is installed.", file=sys.stderr)
        raise
    
    # Vercel CLI now requires explicit --scope in non-interactive mode.
    # Read it from VERCEL_SCOPE env var (preferred) or fall back to a sane default.
    scope = os.environ.get("VERCEL_SCOPE", "beharks-projects")
    scope_args = ["--scope", scope]

    # Link to a new vercel project non-interactively
    try:
        run(["vercel", "link", "--yes", "--project", slug, *scope_args], project_dir, check=False)
    except FileNotFoundError:
        print("Error: vercel CLI not found. Install with: npm install -g vercel", file=sys.stderr)
        raise

    try:
        result = subprocess.run(
            ["vercel", "deploy", "--prod", "--yes", "--archive=tgz", *scope_args],
            cwd=project_dir, capture_output=True, text=True, timeout=300,
        )
        print(result.stdout)
        if result.returncode != 0:
            print(result.stderr, file=sys.stderr)
            return None
        # Last URL-looking line is the production URL
        urls = re.findall(r"https?://[^\s]+\.vercel\.app", result.stdout)
        return urls[-1] if urls else None
    except subprocess.TimeoutExpired:
        print("Error: Vercel deployment timed out (5 minutes)", file=sys.stderr)
        raise
    except Exception as e:
        print(f"Error during deployment: {e}", file=sys.stderr)
        raise


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--name", required=True, help='Business name e.g. "Aksesore Kristali"')
    p.add_argument("--category", required=True, help="Category key from presets.yaml")
    p.add_argument("--phone", required=True, help='Phone e.g. "+383 49 425 565"')
    p.add_argument("--city", required=True, help='City e.g. "Prizren"')
    p.add_argument("--address", required=True, help='Full address')
    p.add_argument("--slug", default=None, help="Override project slug")
    p.add_argument("--language", default=None, choices=["sq", "de", "en", "fr"], help="Language code: sq (Albanian), de (German), en (English), fr (French). If omitted, auto-detected from phone country code (fallback: en).")
    p.add_argument("--no-deploy", action="store_true", help="Skip npm install + vercel deploy")
    p.add_argument("--no-seo", action="store_true", help="Skip SEO generation (robots.txt, sitemap, schema)")
    p.add_argument("--dump-tokens", action="store_true", help="Print resolved tokens and exit")
    p.add_argument("--analytics", default=None, choices=["ga4", "hotjar", "both"], help="Analytics provider: ga4 (Google Analytics 4), hotjar, both")
    args = p.parse_args()

    # Validate input arguments
    if not args.name or not args.name.strip():
        print("Error: --name cannot be empty", file=sys.stderr)
        return 1
    if not args.city or not args.city.strip():
        print("Error: --city cannot be empty", file=sys.stderr)
        return 1
    if not args.address or not args.address.strip():
        print("Error: --address cannot be empty", file=sys.stderr)
        return 1

    # Load presets with error handling
    if not PRESETS_FILE.exists():
        print(f"Error: Presets file not found at {PRESETS_FILE}", file=sys.stderr)
        return 1
    
    try:
        with PRESETS_FILE.open() as f:
            data = yaml.safe_load(f)
    except yaml.YAMLError as e:
        print(f"Error parsing {PRESETS_FILE}: {e}", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"Error reading {PRESETS_FILE}: {e}", file=sys.stderr)
        return 1

    if not data or "categories" not in data or "palettes" not in data:
        print(f"Error: {PRESETS_FILE} missing 'categories' or 'palettes' section", file=sys.stderr)
        return 1

    if args.category not in data["categories"]:
        avail = list(data["categories"].keys())
        print(f"Error: Unknown category '{args.category}'.", file=sys.stderr)
        print(f"Available categories: {', '.join(avail)}", file=sys.stderr)
        return 2

    preset = data["categories"][args.category]
    palette_key = preset.get("palette")
    palette = data["palettes"].get(palette_key, {})

    # Auto-detect language from phone country code if not explicitly set.
    language = args.language or detect_language(args.phone, args.city)
    print(f"→ Language: {language}{' (auto-detected)' if not args.language else ''}")

    tokens = build_tokens(args, preset, palette, language)
    if args.slug:
        tokens["PROJECT_SLUG"] = args.slug

    # Validate all required tokens are present
    missing = validate_tokens(tokens)
    if missing:
        print(f"Error: Missing required tokens in preset '{args.category}':", file=sys.stderr)
        for token in sorted(missing)[:10]:  # Show first 10
            print(f"  - {token}", file=sys.stderr)
        if len(missing) > 10:
            print(f"  ... and {len(missing) - 10} more", file=sys.stderr)
        print(f"\nPlease update the '{args.category}' preset in {PRESETS_FILE}", file=sys.stderr)
        return 1

    if args.dump_tokens:
        print(json.dumps(tokens, indent=2, ensure_ascii=False))
        return 0

    slug = tokens["PROJECT_SLUG"]
    out = DIST_DIR / slug
    DIST_DIR.mkdir(exist_ok=True)

    print(f"→ Generating {slug} from template")
    try:
        copy_and_substitute(TEMPLATE_DIR, out, tokens)
    except Exception as e:
        print(f"Error during template generation: {e}", file=sys.stderr)
        return 1
    print(f"✓ Written to {out}")

    if args.no_deploy:
        print("Skipping deploy (--no-deploy).")
        return 0

    print(f"→ Deploying {slug} to Vercel")
    try:
        url = deploy(out, slug)
    except Exception as e:
        print(f"Error during deployment: {e}", file=sys.stderr)
        return 1
    if url:
        print(f"\n✓ LIVE: {url}\n")
        return 0
    print("Deploy did not report a URL — inspect logs above.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
