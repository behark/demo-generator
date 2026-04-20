export default function Stats() {
  return (
    <section
      id="statistika"
      className="relative py-20 sm:py-28 bg-[#060A0C] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=80')" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow text-[#7DD4E2] mb-4 uppercase tracking-[0.25em]">
            Pse MUKI DENT
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
            Buzëqeshja juaj,
            <span className="block italic font-normal text-[#7DD4E2]">
              në duar të sigurta.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-14">
          {[
            { label: "Kënaqësia e pacientit", value: "100%" },
            { label: "Saktësi klinike", value: "100%" },
            { label: "Sterilizim EU", value: "100%" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between gap-4 bg-[#7DD4E2] text-[#060A0C] rounded-full px-7 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
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
