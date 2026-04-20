export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 sm:py-36 bg-[#0A1628] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/60" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[#B8935A] mb-5">Kontakti</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          Gjeni veturën tuaj,
          <span className="block italic font-normal text-[#B8935A]">me ndihmën tonë.</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Na telefononi ose na shkruani në WhatsApp. Ju përgjigjemi shpejt me informata, foto shtesë ose caktim test drive.
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="tel:+38349444471"
            className="group bg-[#0A1628] hover:bg-[#152338] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#B8935A] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Thirr</div>
            <div className="text-white/55 text-sm tabular-nums">049 444 471</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#B8935A] transition-colors">
              Telefono →
            </div>
          </a>

          <a
            href="https://wa.me/38349444471"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0A1628] hover:bg-[#152338] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#B8935A] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">WhatsApp</div>
            <div className="text-white/55 text-sm tabular-nums">+383 49 444 471</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#B8935A] transition-colors">
              Shkruaj →
            </div>
          </a>

          <a
            href="#lokacion"
            className="group bg-[#0A1628] hover:bg-[#152338] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[#B8935A] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Vizito</div>
            <div className="text-white/55 text-sm">Lokacioni ynë</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[#B8935A] transition-colors">
              Hap hartën →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
