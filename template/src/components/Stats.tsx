export default function Stats() {
  return (
    <section
      id="statistika"
      className="relative py-20 sm:py-28 bg-[{{COLOR_ACCENT}}] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('{{HERO_IMAGE}}')" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow text-[{{COLOR_SECONDARY}}] mb-4 uppercase tracking-[0.25em]">
            {{STATS_EYEBROW}}
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
            {{STATS_QUOTE_MAIN}}
            <span className="block italic font-normal text-[{{COLOR_SECONDARY}}]">
              {{STATS_QUOTE_ITALIC}}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-14">
          {[
            { label: "{{STATS_PILL_1_LABEL}}", value: "{{STATS_PILL_1_VALUE}}" },
            { label: "{{STATS_PILL_2_LABEL}}", value: "{{STATS_PILL_2_VALUE}}" },
            { label: "{{STATS_PILL_3_LABEL}}", value: "{{STATS_PILL_3_VALUE}}" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between gap-4 bg-[{{COLOR_SECONDARY}}] text-[{{COLOR_ACCENT}}] rounded-full px-7 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
            >
              <span className="font-semibold uppercase tracking-wide text-[0.82rem] sm:text-[0.92rem]">
                {s.label}
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold tabular-nums">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
