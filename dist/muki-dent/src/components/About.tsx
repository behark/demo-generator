export default function About() {
  return (
    <section id="rreth" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="eyebrow mb-4">Rreth nesh</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#0E1519]">
              Më shumë se një klinikë,
              <span className="block italic font-normal text-[#5EC8D9]">— një ekip që ju dëgjon.</span>
            </h2>
            <p className="text-[#6B7880] text-[1.02rem] leading-relaxed mt-7">
              Shumë njerëz e shtyjnë vizitën te dentisti për shkak të frikës ose mungesës së kohës. Ne e dimë këtë dhe punojmë çdo ditë për t'jua bërë eksperiencën të qetë dhe pa stres.
            </p>
            <p className="text-[#6B7880] text-[1.02rem] leading-relaxed mt-5">
              Materiale të çertifikuara, sterilizim sipas standardeve evropiane dhe një ekip që ju shpjegon çdo hap. Kjo është arsyeja pse pacientët tanë na rekomandojnë te familja dhe miqtë.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                "Higjienë e lartë",
                "Materiale të çertifikuara",
                "Trajtim pa dhimbje",
                "Plan i personalizuar",
                "Termin online",
                "Vizita për fëmijë",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5EC8D9] flex-shrink-0" />
                  <span className="text-[#0E1519] font-medium text-[0.95rem]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-center bg-cover"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80')" }}
            />
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#F0F5F7] border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">Pacientë</div>
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#0E1519]">5/5</span>
                <span className="text-[#6B7880] text-sm leading-tight">rating në Google</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 sm:-right-10 bg-[#5EC8D9] text-white px-6 py-4 shadow-xl">
              <div className="eyebrow text-white/60 mb-1">Çdo ditë</div>
              <div className="font-[family-name:var(--font-playfair)] text-2xl">
                Termine të reja
              </div>
              <div className="text-white/70 text-xs mt-0.5">Rezervoni paraprakisht</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
