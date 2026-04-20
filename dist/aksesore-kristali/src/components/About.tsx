export default function About() {
  return (
    <section id="rreth" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="eyebrow mb-4">Rreth nesh</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#18161A]">
              Mjeshtëri dhe besim,
              <span className="block italic font-normal text-[#D4A744]">në çdo detaj.</span>
            </h2>
            <p className="text-[#6B6570] text-[1.02rem] leading-relaxed mt-7">
              Ne jemi një dyqan bizhuterish i përkushtuar ndaj cilësisë dhe klientit. Çdo copë në koleksionin tonë është zgjedhur ose punuar me kujdes.
            </p>
            <p className="text-[#6B6570] text-[1.02rem] leading-relaxed mt-5">
              Kombinojmë traditën me dizajnin modern — që ju të gjeni bizhuterinë e përsosur për çdo rast të veçantë të jetës suaj.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 pt-10 border-t hairline">
              {[
                "Ar 14k dhe 18k origjinal",
                "Bizhuteri me porosi",
                "Riparim profesional",
                "Gurë natyralë të certifikuar",
                "Çmime të drejta",
                "Garanci për çdo produkt",
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
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1400&q=80')" }}
            />
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#F4EDE1] border hairline px-6 py-4 shadow-xl">
              <div className="eyebrow mb-1">Që nga</div>
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#18161A]">2015</span>
                <span className="text-[#6B6570] text-sm leading-tight">në shërbim të klientëve</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 sm:-right-10 bg-[#D4A744] text-white px-6 py-4 shadow-xl">
              <div className="eyebrow text-white/60 mb-1">Mijëra</div>
              <div className="font-[family-name:var(--font-playfair)] text-2xl">
                Klientë të lumtur
              </div>
              <div className="text-white/70 text-xs mt-0.5">Në Prizren dhe më gjerë</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
