const services = [
  {
    n: "01",
    title: "Fruta & perime",
    description: "Fruta dhe perime të freskëta lokale dhe të importuara — cilësi e garantuar çdo ditë.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Mish & prodhime",
    description: "Mish i freskët viçi, viçi dhe pule nga fermerët vendas — i prerë sipas dëshirës.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Bukë & brumëra",
    description: "Bukë e ngrohtë, simite, brumëra dhe ëmbëlsira të bëra çdo mëngjes.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Qumështore",
    description: "Qumësht, djathë, kos dhe produkte qumështi nga prodhuesit më të besuar vendas.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Pije",
    description: "Pije freskuese, ujëra, lëngje natyralë dhe koleksion i pijeve alkoolike.",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    title: "Produkte shtëpiake",
    description: "Detergjente, produkte higjienike dhe gjithçka e nevojshme për shtëpinë tuaj.",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">Çfarë ofrojmë</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#14251C] tracking-tight">
            Produkte të freskëta
            <span className="block italic text-[#2D7A4A]">çdo ditë në raftet tona.</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#5F6C64] leading-relaxed">
            Nga ushqimet e përditshme deri te produktet e specializuara — gjithçka që ju nevojitet në një vend të vetëm.
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
                  <span className="eyebrow text-[#E8B94E]">
                    {service.n}
                  </span>
                  <span className="w-10 h-px bg-[#E0DFCF]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#14251C] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5F6C64] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#14251C] text-white font-medium px-8 py-3.5 rounded-full text-[0.9rem] tracking-wide transition-all hover:bg-[#2D7A4A]"
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
