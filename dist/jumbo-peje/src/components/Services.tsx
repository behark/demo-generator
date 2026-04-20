const services = [
  {
    n: "01",
    title: "Për shtëpi & kuzhinë",
    description: "Produkte praktike për kuzhinë, enë, mbajtëse dhe organizim — gjithçka që ju nevojitet.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Lodra & fëmijë",
    description: "Koleksion i gjerë lodrash, lojëra didaktike dhe gjëra argëtuese për fëmijët e çdo moshe.",
    image: "https://images.unsplash.com/photo-1558877385-8c1b7bfcaffe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Tekstil & shtroja",
    description: "Çarçafë, peshqirë, qilima dhe tekstil shtëpie — cilësi e mirë me çmime të lira.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Dekor & zbukurime",
    description: "Zbukurime sezonale, kuadro, qirinj dhe gjithçka që e bën shtëpinë tuaj më të ngrohtë.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Veshmbathje",
    description: "Rroba për tërë familjen, çorape, të brendshme dhe aksesorë me çmime të arritshme.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    title: "Sezonale & dhurata",
    description: "Artikuj sezonalë, dhurata, ambalazhe dhe gjithçka për festa e ngjarje të veçanta.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">Çfarë gjeni te ne</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#21211F] tracking-tight">
            Çmime të mira,
            <span className="block italic text-[#E85D3C]">gjithçka në një vend.</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6B6862] leading-relaxed">
            Nga gjëra për shtëpi deri te lodra, tekstil dhe dekor — produkte praktike dhe argëtuese për tërë familjen.
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
                  <span className="eyebrow text-[#F5C543]">
                    {service.n}
                  </span>
                  <span className="w-10 h-px bg-[#EDE4D2]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#21211F] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B6862] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#21211F] text-white font-medium px-8 py-3.5 rounded-full text-[0.9rem] tracking-wide transition-all hover:bg-[#E85D3C]"
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
