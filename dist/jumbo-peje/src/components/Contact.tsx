export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 sm:py-36 bg-[#1A1410] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/90 to-[#1A1410]/60" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[#E85D3C] mb-5">Kontakti</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          Pyetje apo ofertë?,
          <span className="block italic font-normal text-[#E85D3C]">Na kontaktoni.</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Për pyetje, oferta të veçanta, bashkëpunime me biznese ose porosi të mëdha — na telefononi ose na shkruani.
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="tel:+38348999016"
            className="group bg-[#1A1410] hover:bg-[#2A2018] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E85D3C] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Thirr</div>
            <div className="text-white/55 text-sm tabular-nums">048 999 016</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E85D3C] transition-colors">
              Telefono →
            </div>
          </a>

          <a
            href="https://wa.me/38348999016"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#1A1410] hover:bg-[#2A2018] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E85D3C] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">WhatsApp</div>
            <div className="text-white/55 text-sm tabular-nums">+383 48 999 016</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E85D3C] transition-colors">
              Shkruaj →
            </div>
          </a>

          <a
            href="#lokacion"
            className="group bg-[#1A1410] hover:bg-[#2A2018] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#E85D3C] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Vizito</div>
            <div className="text-white/55 text-sm">Lokacioni ynë</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#E85D3C] transition-colors">
              Hap hartën →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
