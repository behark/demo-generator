export default function Location() {
  return (
    <section id="lokacion" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="eyebrow mb-4">Na vizitoni</div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#14251C]">
            Afër jush,
            <span className="block italic font-normal text-[#2D7A4A]">çdo ditë të javës.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="grid sm:grid-cols-2 gap-6 self-start">
            <div className="border-t border-[#14251C] pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Adresa</div>
              <p className="text-[#14251C]/75 leading-relaxed">
                Rr. Tirana pn<br />Prizren 20000
              </p>
              <p className="text-xs text-[#14251C]/45 mt-2 italic">
                Pjesë e qytetit — parkim i lehtë.
              </p>
            </div>
            <div className="border-t border-[#14251C] pt-6">
              <div className="eyebrow mb-2">Telefon</div>
              <a href="tel:+37745920921" className="text-[#14251C] hover:text-[#2D7A4A] transition-colors tabular-nums font-semibold">
                045 920 921
              </a>
            </div>
            <div className="border-t border-[#14251C] pt-6">
              <div className="eyebrow mb-2">WhatsApp</div>
              <a
                href="https://wa.me/37745920921"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14251C] hover:text-[#2D7A4A] transition-colors tabular-nums"
              >
                +377 45 920 921
              </a>
            </div>
            <div className="border-t border-[#14251C] pt-6 sm:col-span-2">
              <div className="eyebrow mb-3">Orari</div>
              <div className="text-[#14251C]/75 space-y-1.5 tabular-nums">
                <div className="flex justify-between gap-6"><span>E hënë – E premte</span><span>08:00 – 20:00</span></div>
                <div className="flex justify-between gap-6"><span>E shtunë</span><span>08:00 – 18:00</span></div>
                <div className="flex justify-between gap-6"><span>E diel</span><span className="text-[#2D7A4A]">Mbyllur</span></div>
              </div>
            </div>
            <div className="border-t border-[#14251C] pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Mirë të dini</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#14251C]/70">
                <span>· Dërgesë në shtëpi</span>
                <span>· Pagesa me kartë & cash</span>
                <span>· Produkte lokale</span>
                <span>· Porosi në WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow-xl min-h-[480px] bg-[#E0DFCF]">
            <iframe
              src="https://www.google.com/maps?q=Abi+Store,+Rr.+Tirana+pn,+Prizren+20000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", filter: "grayscale(0.2) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Abi Store Lokacion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
