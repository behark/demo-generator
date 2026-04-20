export default function Footer() {
  return (
    <footer className="bg-[{{FOOTER_BG}}] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-[{{COLOR_PRIMARY}}] text-white font-bold text-sm">
                {{BUSINESS_INITIAL}}
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-xl">
                {{BUSINESS_NAME_MAIN}} <span className="italic opacity-80">{{BUSINESS_NAME_TAIL}}</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              {{FOOTER_TAGLINE}}
            </p>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Navigimi</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#sherbime" className="hover:text-[{{COLOR_PRIMARY}}] transition-colors">{{NAV_SERVICES}}</a></li>
              <li><a href="#rreth" className="hover:text-[{{COLOR_PRIMARY}}] transition-colors">Rreth nesh</a></li>
              <li><a href="#lokacion" className="hover:text-[{{COLOR_PRIMARY}}] transition-colors">Lokacion</a></li>
              <li><a href="#kontakt" className="hover:text-[{{COLOR_PRIMARY}}] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Kontakt</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{{CITY}}</li>
              <li>
                <a href="tel:+{{PHONE_INTL_DIGITS}}" className="hover:text-[{{COLOR_PRIMARY}}] transition-colors tabular-nums">
                  {{PHONE_LOCAL}}
                </a>
              </li>
              <li>
                <a href="https://wa.me/{{PHONE_INTL_DIGITS}}" target="_blank" rel="noopener noreferrer" className="hover:text-[{{COLOR_PRIMARY}}] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Orari</div>
            <ul className="space-y-2.5 text-sm text-white/70 tabular-nums">
              <li className="flex justify-between"><span>Hën – Pre</span><span>{{HOURS_WEEKDAY}}</span></li>
              <li className="flex justify-between"><span>E shtunë</span><span>{{HOURS_SATURDAY}}</span></li>
              <li className="flex justify-between"><span>E diel</span><span className="text-[{{COLOR_PRIMARY}}]">{{HOURS_SUNDAY}}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} {{BUSINESS_NAME}}. Të gjitha të drejtat e rezervuara.</p>
          <p>
            Dizajn & Zhvillim ·{" "}
            <a href="https://beharkabashi.com" target="_blank" rel="noopener noreferrer" className="text-[{{COLOR_PRIMARY}}] hover:underline">
              Apex Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
