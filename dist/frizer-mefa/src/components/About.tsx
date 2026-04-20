export default function About() {
  return (
    <section id="rreth" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="eyebrow mb-4">Rreth nesh</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#18161A]">
              Më shumë se një prerje,
              <span className="block italic font-normal text-[#D4A744]">— një ritual.</span>
            </h2>
            <p className="text-[#6B6570] text-[1.02rem] leading-relaxed mt-7">
              Frizeria jonë nuk është vetëm një vend ku prihen flokët. Është një moment ku ju kujdeseni për veten, një pauzë në rutinën e përditshme.
            </p>
            <p className="text-[#6B6570] text-[1.02rem] leading-relaxed mt-5">
              Punojmë me produkte premium, mbajmë standarde të larta të higjienës dhe çdo klient del i kënaqur. Kjo është arsyeja pse klientët tanë na rekomandojnë.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                "Mjeshtër profesionistë",
                "Produkte premium",
                "Higjienë e lartë",
                "Rezervime online",
                "Çmime të drejta",
                "Kafe falas për klientët",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4A744] flex-shrink-0" />
                  <span className="text-[#18161A] font-medium text-[0.95rem]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-center bg-cover"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1400&q=80')" }}
            />
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#F4EDE1] border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">Klientë</div>
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#18161A]">5/5</span>
                <span className="text-[#6B6570] text-sm leading-tight">rating në Google</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 sm:-right-10 bg-[#D4A744] text-white px-6 py-4 shadow-xl">
              <div className="eyebrow text-white/60 mb-1">Çdo javë</div>
              <div className="font-[family-name:var(--font-playfair)] text-2xl">
                Dhjetëra terme
              </div>
              <div className="text-white/70 text-xs mt-0.5">Rezervoni paraprakisht</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
