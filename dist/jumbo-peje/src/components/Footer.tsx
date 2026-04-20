export default function Footer() {
  return (
    <footer className="bg-[#0D0907] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-[#E85D3C] text-white font-bold text-sm">
                J
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-xl">
                Jumbo <span className="italic opacity-80">Pejë</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Gjithçka që familja juaj ka nevojë — në një vend të vetëm, me çmime të mira çdo ditë.
            </p>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Navigimi</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#sherbime" className="hover:text-[#E85D3C] transition-colors">Produktet</a></li>
              <li><a href="#rreth" className="hover:text-[#E85D3C] transition-colors">Rreth nesh</a></li>
              <li><a href="#lokacion" className="hover:text-[#E85D3C] transition-colors">Lokacion</a></li>
              <li><a href="#kontakt" className="hover:text-[#E85D3C] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Kontakt</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>Pejë</li>
              <li>
                <a href="tel:+38348999016" className="hover:text-[#E85D3C] transition-colors tabular-nums">
                  048 999 016
                </a>
              </li>
              <li>
                <a href="https://wa.me/38348999016" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85D3C] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Orari</div>
            <ul className="space-y-2.5 text-sm text-white/70 tabular-nums">
              <li className="flex justify-between"><span>Hën – Pre</span><span>08:00 – 20:00</span></li>
              <li className="flex justify-between"><span>E shtunë</span><span>08:00 – 18:00</span></li>
              <li className="flex justify-between"><span>E diel</span><span className="text-[#E85D3C]">Mbyllur</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Jumbo Pejë. Të gjitha të drejtat e rezervuara.</p>
          <p>
            Dizajn & Zhvillim ·{" "}
            <a href="https://beharkabashi.com" target="_blank" rel="noopener noreferrer" className="text-[#E85D3C] hover:underline">
              Apex Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
