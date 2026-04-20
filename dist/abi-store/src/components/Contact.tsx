export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 sm:py-36 bg-[#0E2A1C] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A1C] via-[#0E2A1C]/90 to-[#0E2A1C]/60" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[#2D7A4A] mb-5">Kontakti</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          Porosit sot,
          <span className="block italic font-normal text-[#2D7A4A]">dhe merr brenda ditës.</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Na telefononi ose na shkruani në WhatsApp për porosinë tuaj — ju dorëzojmë deri te dera.
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="tel:+37745920921"
            className="group bg-[#0E2A1C] hover:bg-[#19382A] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#2D7A4A] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Thirr</div>
            <div className="text-white/55 text-sm tabular-nums">045 920 921</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#2D7A4A] transition-colors">
              Telefono →
            </div>
          </a>

          <a
            href="https://wa.me/37745920921"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0E2A1C] hover:bg-[#19382A] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#2D7A4A] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">WhatsApp</div>
            <div className="text-white/55 text-sm tabular-nums">+377 45 920 921</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#2D7A4A] transition-colors">
              Shkruaj →
            </div>
          </a>

          <a
            href="#lokacion"
            className="group bg-[#0E2A1C] hover:bg-[#19382A] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#2D7A4A] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Vizito</div>
            <div className="text-white/55 text-sm">Lokacioni ynë</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#2D7A4A] transition-colors">
              Hap hartën →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
