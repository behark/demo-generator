const services = [
  {
    n: "01",
    title: "Prerje flokësh",
    description: "Prerje moderne dhe klasike të përshtatura për formën e fytyrës dhe stilin tuaj personal.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Rregullim mjekrre",
    description: "Formësim, rrezitje dhe kujdes profesional i mjekrës me produkte premium.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Rruarje klasike",
    description: "Rruarje me brisk të ngrohtë dhe peshqir — ritual tradicional për lëkurë të butë.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Prerje për fëmijë",
    description: "Ambient i qetë dhe i duruar për prerjen e parë ose të qindtën — fëmijët ndihen rehat këtu.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Larje & trajtim",
    description: "Larje, masazh koke dhe trajtime hidratuese për flokë të shëndetshëm.",
    image: "https://images.unsplash.com/photo-1634302086738-b7d8bc8113e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    title: "Paketa për dasma",
    description: "Paketa të veçanta për dhëndër e miq — rezervoni paraprakisht për ditën e madhe.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[#F4EDE1]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">Çfarë ofrojmë</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#18161A] tracking-tight">
            Shërbime frizerie
            <span className="block italic text-[#D4A744]">për burrin modern.</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6B6570] leading-relaxed">
            Prerje klasike e moderne, kujdes për mjekrën, pastrim me peshqir të ngrohtë — çdo detaj i punuar me mjeshtëri.
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
                  <span className="eyebrow text-[#E8C877]">
                    {service.n}
                  </span>
                  <span className="w-10 h-px bg-[#E3DCCB]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#18161A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B6570] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#18161A] text-white font-medium px-8 py-3.5 rounded-full text-[0.9rem] tracking-wide transition-all hover:bg-[#D4A744]"
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
