export default function About() {
  return (
    <section id="rreth" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="eyebrow mb-4">Rreth nesh</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[{{COLOR_INK}}]">
              {{ABOUT_TITLE_MAIN}},
              <span className="block italic font-normal text-[{{COLOR_PRIMARY}}]">{{ABOUT_TITLE_ITALIC}}</span>
            </h2>
            <p className="text-[{{COLOR_MUTED}}] text-[1.02rem] leading-relaxed mt-7">
              {{ABOUT_P1}}
            </p>
            <p className="text-[{{COLOR_MUTED}}] text-[1.02rem] leading-relaxed mt-5">
              {{ABOUT_P2}}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                "{{FEATURE_1}}",
                "{{FEATURE_2}}",
                "{{FEATURE_3}}",
                "{{FEATURE_4}}",
                "{{FEATURE_5}}",
                "{{FEATURE_6}}",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[{{COLOR_PRIMARY}}] flex-shrink-0" />
                  <span className="text-[{{COLOR_INK}}] font-medium text-[0.95rem]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-center bg-cover"
              style={{ backgroundImage: "url('{{ABOUT_IMAGE}}')" }}
            />
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[{{COLOR_CREAM}}] border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">{{BADGE_LABEL}}</div>
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[{{COLOR_INK}}]">{{BADGE_VALUE}}</span>
                <span className="text-[{{COLOR_MUTED}}] text-sm leading-tight">{{BADGE_SUBTEXT}}</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 sm:-right-10 bg-[{{COLOR_PRIMARY}}] text-white px-6 py-4 shadow-xl">
              <div className="eyebrow text-white/60 mb-1">{{STAT_LABEL}}</div>
              <div className="font-[family-name:var(--font-playfair)] text-2xl">
                {{STAT_VALUE}}
              </div>
              <div className="text-white/70 text-xs mt-0.5">{{STAT_SUBTEXT}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
