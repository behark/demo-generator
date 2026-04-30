"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sherbime", label: "{{NAV_SERVICES}}" },
  { href: "#reservierung", label: "Reservierung" },
  { href: "#rreth", label: "Über uns" },
  { href: "#standort", label: "Standort" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[{{NAV_BG_SCROLLED}}]/95 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-3">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full border ${
                scrolled ? "border-[{{NAV_TEXT_SCROLLED}}]/25 text-[{{NAV_TEXT_SCROLLED}}]" : "border-white/30 text-white"
              } font-[family-name:var(--font-playfair)] italic text-lg`}
            >
              {{BUSINESS_INITIAL}}
            </span>
            <span
              className={`font-[family-name:var(--font-playfair)] text-lg sm:text-xl tracking-tight ${
                scrolled ? "text-[{{NAV_TEXT_SCROLLED}}]" : "text-white"
              }`}
            >
              {{BUSINESS_NAME_MAIN}}
              <span className="font-normal italic opacity-70"> {{BUSINESS_NAME_TAIL}}</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.82rem] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-[{{NAV_TEXT_SCROLLED}}]/75 hover:text-[{{COLOR_PRIMARY}}]"
                    : "text-white/85 hover:text-[{{COLOR_SECONDARY}}]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/{{PHONE_INTL_DIGITS}}"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full text-[0.82rem] font-medium tracking-wide px-5 py-2.5 transition-all ${
                scrolled
                  ? "bg-[{{COLOR_PRIMARY}}] text-white hover:bg-[{{COLOR_PRIMARY_DARK}}]"
                  : "bg-white text-[{{NAV_TEXT_SCROLLED}}] hover:bg-[{{COLOR_SECONDARY}}]"
              }`}
            >
              {{CTA_PRIMARY_LABEL}}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Hap menynë"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px transition-all ${mobileOpen ? "rotate-45 translate-y-2 bg-[{{NAV_TEXT_SCROLLED}}]" : scrolled ? "bg-[{{NAV_TEXT_SCROLLED}}]" : "bg-white"}`} />
              <span className={`block w-6 h-px transition-all ${mobileOpen ? "opacity-0" : scrolled ? "bg-[{{NAV_TEXT_SCROLLED}}]" : "bg-white"}`} />
              <span className={`block w-6 h-px transition-all ${mobileOpen ? "-rotate-45 -translate-y-2 bg-[{{NAV_TEXT_SCROLLED}}]" : scrolled ? "bg-[{{NAV_TEXT_SCROLLED}}]" : "bg-white"}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[{{NAV_BG_SCROLLED}}] border-t hairline">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[{{NAV_TEXT_SCROLLED}}]/80 hover:text-[{{COLOR_PRIMARY}}] font-medium py-3 border-b hairline last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/{{PHONE_INTL_DIGITS}}"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-[{{COLOR_PRIMARY}}] text-white font-medium rounded-full py-3.5"
            >
              {{CTA_PRIMARY_LABEL}}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
