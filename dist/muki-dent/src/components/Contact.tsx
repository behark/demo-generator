export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 sm:py-36 bg-[#060A0C] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060A0C] via-[#060A0C]/90 to-[#060A0C]/60" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[#5EC8D9] mb-5">Kontakti</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          Rezervo vizitën,
          <span className="block italic font-normal text-[#5EC8D9]">shpejt dhe pa stres.</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Na shkruani në WhatsApp ose na telefononi. Ju përgjigjemi shpejt dhe ju caktojmë terminin që ju përshtatet — pa pritje në linjë.
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="tel:+38649876079"
            className="group bg-[#060A0C] hover:bg-[#0E1519] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#5EC8D9] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Thirr</div>
            <div className="text-white/55 text-sm tabular-nums">049 876 079</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#5EC8D9] transition-colors">
              Telefono →
            </div>
          </a>

          <a
            href="https://wa.me/38649876079"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#060A0C] hover:bg-[#0E1519] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#5EC8D9] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">WhatsApp</div>
            <div className="text-white/55 text-sm tabular-nums">+386 49 876 079</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#5EC8D9] transition-colors">
              Shkruaj →
            </div>
          </a>

          <a
            href="#lokacion"
            className="group bg-[#060A0C] hover:bg-[#0E1519] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#5EC8D9] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Vizito</div>
            <div className="text-white/55 text-sm">Lokacioni ynë</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#5EC8D9] transition-colors">
              Hap hartën →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
