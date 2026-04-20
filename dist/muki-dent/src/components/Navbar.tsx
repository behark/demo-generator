"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sherbime", label: "Shërbime" },
  { href: "#rezervo", label: "Rezervo" },
  { href: "#rreth", label: "Rreth nesh" },
  { href: "#lokacion", label: "Lokacion" },
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
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-3">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full border ${
                scrolled ? "border-[#0E1519]/25 text-[#0E1519]" : "border-white/30 text-white"
              } font-[family-name:var(--font-playfair)] italic text-lg`}
            >
              M
            </span>
            <span
              className={`font-[family-name:var(--font-playfair)] text-lg sm:text-xl tracking-tight ${
                scrolled ? "text-[#0E1519]" : "text-white"
              }`}
            >
              MUKI
              <span className="font-normal italic opacity-70"> DENT</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.82rem] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-[#0E1519]/75 hover:text-[#5EC8D9]"
                    : "text-white/85 hover:text-[#7DD4E2]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/38649876079"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full text-[0.82rem] font-medium tracking-wide px-5 py-2.5 transition-all ${
                scrolled
                  ? "bg-[#5EC8D9] text-white hover:bg-[#3FA8BA]"
                  : "bg-white text-[#0E1519] hover:bg-[#7DD4E2]"
              }`}
            >
              Rezervo Vizitën
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
              <span className={`block w-6 h-px transition-all ${mobileOpen ? "rotate-45 translate-y-2 bg-[#0E1519]" : scrolled ? "bg-[#0E1519]" : "bg-white"}`} />
              <span className={`block w-6 h-px transition-all ${mobileOpen ? "opacity-0" : scrolled ? "bg-[#0E1519]" : "bg-white"}`} />
              <span className={`block w-6 h-px transition-all ${mobileOpen ? "-rotate-45 -translate-y-2 bg-[#0E1519]" : scrolled ? "bg-[#0E1519]" : "bg-white"}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t hairline">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#0E1519]/80 hover:text-[#5EC8D9] font-medium py-3 border-b hairline last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/38649876079"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-[#5EC8D9] text-white font-medium rounded-full py-3.5"
            >
              Rezervo Vizitën
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
