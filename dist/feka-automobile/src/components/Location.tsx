export default function Location() {
  return (
    <section id="lokacion" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="eyebrow mb-4">Vizitoni sallonin</div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#0F1A2D]">
            Afër autostradës,
            <span className="block italic font-normal text-[#B8935A]">i lehtë për t'u gjetur.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="grid sm:grid-cols-2 gap-6 self-start">
            <div className="border-t border-[#0F1A2D] pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Adresa</div>
              <p className="text-[#0F1A2D]/75 leading-relaxed">
                Magjistralja Vushtrri - Prishtinë<br />Vushtrri 42000
              </p>
              <p className="text-xs text-[#0F1A2D]/45 mt-2 italic">
                Parkim i madh — vizitoni sallonin pa termin paraprak.
              </p>
            </div>
            <div className="border-t border-[#0F1A2D] pt-6">
              <div className="eyebrow mb-2">Telefon</div>
              <a href="tel:+38349444471" className="text-[#0F1A2D] hover:text-[#B8935A] transition-colors tabular-nums font-semibold">
                049 444 471
              </a>
            </div>
            <div className="border-t border-[#0F1A2D] pt-6">
              <div className="eyebrow mb-2">WhatsApp</div>
              <a
                href="https://wa.me/38349444471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F1A2D] hover:text-[#B8935A] transition-colors tabular-nums"
              >
                +383 49 444 471
              </a>
            </div>
            <div className="border-t border-[#0F1A2D] pt-6 sm:col-span-2">
              <div className="eyebrow mb-3">Orari</div>
              <div className="text-[#0F1A2D]/75 space-y-1.5 tabular-nums">
                <div className="flex justify-between gap-6"><span>E hënë – E premte</span><span>08:00 – 20:00</span></div>
                <div className="flex justify-between gap-6"><span>E shtunë</span><span>08:00 – 18:00</span></div>
                <div className="flex justify-between gap-6"><span>E diel</span><span className="text-[#B8935A]">Mbyllur</span></div>
              </div>
            </div>
            <div className="border-t border-[#0F1A2D] pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Mirë të dini</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#0F1A2D]/70">
                <span>· Test drive falas</span>
                <span>· Vlerësim i veturës së vjetër</span>
                <span>· Ndihmë me financim</span>
                <span>· Garanci me shkrim</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow-xl min-h-[480px] bg-[#DCDDE0]">
            <iframe
              src="https://www.google.com/maps?q=Feka+Automobile,+Magjistralja+Vushtrri+-+Prishtinë,+Vushtrri+42000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", filter: "grayscale(0.2) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Feka Automobile Lokacion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
