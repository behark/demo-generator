export default function Footer() {
  return (
    <footer className="bg-[#091A11] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-[#2D7A4A] text-white font-bold text-sm">
                A
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-xl">
                Abi <span className="italic opacity-80">Store</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Supermarket i besuar nga komuniteti — produkte të freskëta dhe çmime të drejta çdo ditë.
            </p>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Navigimi</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#sherbime" className="hover:text-[#2D7A4A] transition-colors">Produktet</a></li>
              <li><a href="#rreth" className="hover:text-[#2D7A4A] transition-colors">Rreth nesh</a></li>
              <li><a href="#lokacion" className="hover:text-[#2D7A4A] transition-colors">Lokacion</a></li>
              <li><a href="#kontakt" className="hover:text-[#2D7A4A] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/60 mb-4">Kontakt</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>Prizren</li>
              <li>
                <a href="tel:+37745920921" className="hover:text-[#2D7A4A] transition-colors tabular-nums">
                  045 920 921
                </a>
              </li>
              <li>
                <a href="https://wa.me/37745920921" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D7A4A] transition-colors">
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
              <li className="flex justify-between"><span>E diel</span><span className="text-[#2D7A4A]">Mbyllur</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Abi Store. Të gjitha të drejtat e rezervuara.</p>
          <p>
            Dizajn & Zhvillim ·{" "}
            <a href="https://beharkabashi.com" target="_blank" rel="noopener noreferrer" className="text-[#2D7A4A] hover:underline">
              Apex Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
