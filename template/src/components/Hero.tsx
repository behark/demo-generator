export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[{{COLOR_ACCENT}}] pt-24 sm:pt-28 pb-12"
    >
      <div
        className="absolute inset-0 kenburns bg-cover bg-center"
        style={{ backgroundImage: "url('{{HERO_IMAGE}}')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 45%, {{HERO_GRADIENT_BOTTOM}} 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="eyebrow text-[{{COLOR_SECONDARY}}] fade-up fade-up-1">
          {{HERO_EYEBROW}}
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] font-semibold tracking-tight mt-6 mb-5 text-[clamp(3rem,7.5vw,6.25rem)] leading-[0.95] fade-up fade-up-2">
          {{HERO_HEADLINE_MAIN}}
          <span className="block italic font-normal text-[{{COLOR_SECONDARY}}] -mt-1">
            {{HERO_HEADLINE_ITALIC}}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 font-light leading-relaxed fade-up fade-up-3">
          {{HERO_SUBTITLE}}
        </p>

        <div className="flex items-center justify-center gap-6 mt-10 fade-up fade-up-3">
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span className="w-8 h-px bg-[{{COLOR_SECONDARY}}]" />
            {{HERO_TAGLINE}}
            <span className="w-8 h-px bg-[{{COLOR_SECONDARY}}]" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 fade-up fade-up-4">
          <a
            href="#reservierung"
            className="group inline-flex items-center gap-2 bg-[{{COLOR_SECONDARY}}] text-[{{COLOR_ACCENT}}] font-medium px-7 py-3.5 rounded-full text-[0.95rem] tracking-wide transition-all hover:bg-white w-full sm:w-auto justify-center"
          >
            {{CTA_PRIMARY_LABEL}}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <a
            href="https://wa.me/{{PHONE_INTL_DIGITS}}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-full text-[0.95rem] tracking-wide transition-all w-full sm:w-auto justify-center hover:bg-white/5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.27 4.84L2 22l5.33-1.39A9.9 9.9 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.83 14.34c-.25.7-1.44 1.33-1.99 1.41-.54.08-1.22.11-1.97-.12-.46-.14-1.04-.34-1.79-.66-3.15-1.36-5.21-4.54-5.37-4.75-.16-.21-1.3-1.73-1.3-3.3 0-1.57.83-2.35 1.12-2.67.29-.32.63-.4.84-.4.21 0 .42 0 .6.01.19.01.45-.07.7.53.25.6.85 2.09.93 2.24.08.16.13.34.03.54-.1.2-.15.33-.3.5-.16.17-.33.38-.47.5-.16.16-.32.33-.14.65.18.32.81 1.34 1.75 2.17 1.2 1.07 2.22 1.4 2.54 1.55.32.16.5.13.69-.08.19-.21.79-.92.99-1.24.2-.32.41-.27.69-.16.28.11 1.79.85 2.09 1 .3.16.5.24.58.37.08.14.08.79-.17 1.49Z" />
            </svg>
            WhatsApp · {{PHONE_LOCAL}}
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/55 fade-up fade-up-4">
          <span>· {{HERO_BADGE_1}}</span>
          <span>· {{HERO_BADGE_2}}</span>
          <span>· {{HERO_BADGE_3}}</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="eyebrow text-white/45">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
