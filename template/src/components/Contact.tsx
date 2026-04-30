export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 sm:py-36 bg-[{{CONTACT_BG}}] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('{{CONTACT_IMAGE}}')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[{{CONTACT_BG}}] via-[{{CONTACT_BG}}]/90 to-[{{CONTACT_BG}}]/60" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow text-[{{COLOR_PRIMARY}}] mb-5">Kontakti</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
          {{CONTACT_TITLE_MAIN}},
          <span className="block italic font-normal text-[{{COLOR_PRIMARY}}]">{{CONTACT_TITLE_ITALIC}}</span>
        </h2>
        <p className="text-white/65 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          {{CONTACT_DESCRIPTION}}
        </p>

        <div className="grid sm:grid-cols-3 gap-px mt-12 bg-white/10">
          <a
            href="tel:+{{PHONE_INTL_DIGITS}}"
            className="group bg-[{{CONTACT_BG}}] hover:bg-[{{CONTACT_HOVER_BG}}] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[{{COLOR_PRIMARY}}] mb-3">01</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Thirr</div>
            <div className="text-white/55 text-sm tabular-nums">{{PHONE_LOCAL}}</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[{{COLOR_PRIMARY}}] transition-colors">
              Telefono →
            </div>
          </a>

          <a
            href="https://wa.me/{{PHONE_INTL_DIGITS}}"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[{{CONTACT_BG}}] hover:bg-[{{CONTACT_HOVER_BG}}] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[{{COLOR_PRIMARY}}] mb-3">02</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">WhatsApp</div>
            <div className="text-white/55 text-sm tabular-nums">+{{PHONE_INTL_FORMATTED}}</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[{{COLOR_PRIMARY}}] transition-colors">
              Shkruaj →
            </div>
          </a>

          <a
            href="#standort"
            className="group bg-[{{CONTACT_BG}}] hover:bg-[{{CONTACT_HOVER_BG}}] transition-colors p-8 text-left"
          >
            <div className="eyebrow text-[{{COLOR_PRIMARY}}] mb-3">03</div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl mb-1">Besuchen</div>
            <div className="text-white/55 text-sm">Unser Standort</div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-[{{COLOR_PRIMARY}}] transition-colors">
              Karte öffnen →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
