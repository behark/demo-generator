const services = [
  {
    n: "01",
    title: "Vetura të importuara",
    description: "Importim direkt nga Gjermania, Zvicra dhe Belgjika — vetëm modele të zgjedhura me histori të pastër.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Kontroll teknik",
    description: "Çdo veturë kalon nëpër kontroll të plotë mekanik dhe elektronik para shitjes.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Këmbim i veturës së vjetër",
    description: "Merrni veturën tuaj të vjetër si pjesë të pagesës — çmim i drejtë në vlerësim.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Financim",
    description: "Ndihmë me kreditim përmes bankave partnere — procesim i shpejtë dhe i thjeshtë.",
    image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Garanci",
    description: "Garanci e shkruar për çdo veturë — besoni asaj që ju shesim, sepse ne besojmë në të.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    title: "Test drive",
    description: "Provoni veturën para blerjes — pa detyrim, thjesht për të qenë të sigurt që është ajo që ju duhet.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">Çfarë ofrojmë</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#0F1A2D] tracking-tight">
            Vetura të kontrolluara
            <span className="block italic text-[#B8935A]">të zgjedhura me kujdes.</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#5C6878] leading-relaxed">
            Importim direkt nga Gjermania dhe Zvicra, kontroll i plotë teknik dhe garanci për çdo veturë që shitet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative bg-white border hairline overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="eyebrow text-[#D4B07E]">
                    {service.n}
                  </span>
                  <span className="w-10 h-px bg-[#DCDDE0]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#0F1A2D] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5C6878] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#0F1A2D] text-white font-medium px-8 py-3.5 rounded-full text-[0.9rem] tracking-wide transition-all hover:bg-[#B8935A]"
          >
            Na Kontaktoni
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
