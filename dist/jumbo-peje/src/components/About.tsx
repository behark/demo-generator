export default function About() {
  return (
    <section id="rreth" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="eyebrow mb-4">Rreth nesh</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#21211F]">
              Dyqan i madh,,
              <span className="block italic font-normal text-[#E85D3C]">zemër e vogël familjare.</span>
            </h2>
            <p className="text-[#6B6862] text-[1.02rem] leading-relaxed mt-7">
              Ne ofrojmë gjithçka që familja juaj ka nevojë në një vend të vetëm — pa humbje kohe, pa dredhi, me çmime që i njihni me siguri.
            </p>
            <p className="text-[#6B6862] text-[1.02rem] leading-relaxed mt-5">
              Puna jonë është të ju ndihmojmë të gjeni produktin e duhur me çmimin e duhur. Çdo ditë. Për tërë familjen.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                "Mijëra produkte",
                "Çmime të lira",
                "Produkte origjinale",
                "Parkim i madh",
                "Staf miqësor",
                "Oferta të rregullta",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E85D3C] flex-shrink-0" />
                  <span className="text-[#21211F] font-medium text-[0.95rem]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-center bg-cover"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1400&q=80')" }}
            />
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#FDF6EC] border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">Dyqane</div>
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#21211F]">Rrjet</span>
                <span className="text-[#6B6862] text-sm leading-tight">në tërë Kosovën</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 sm:-right-10 bg-[#E85D3C] text-white px-6 py-4 shadow-xl">
              <div className="eyebrow text-white/60 mb-1">Mijëra</div>
              <div className="font-[family-name:var(--font-playfair)] text-2xl">
                Produkte në raftet tona
              </div>
              <div className="text-white/70 text-xs mt-0.5">Freski, cilësi, çmim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
