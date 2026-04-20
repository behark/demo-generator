const services = [
  {
    n: "01",
    title: "Unaza fejese",
    description: "Dizajne elegante me diamant dhe gurë të çmuar — të personalizuara sipas dëshirës suaj.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Zinxhirë ari",
    description: "Zinxhirë 14k dhe 18k në modele klasike dhe moderne, për burra dhe gra.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Vathë & byzylykë",
    description: "Koleksion i gjerë vathësh dhe byzylykësh — ar, argjend dhe me gurë natyralë.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Orë luksi",
    description: "Orë për burra dhe gra nga markat më të njohura — stil dhe cilësi të garantuar.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Riparim & pastrim",
    description: "Riparim bizhuterish, pastrim profesional dhe rregullim masash në vend.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    title: "Bizhuteri me porosi",
    description: "Krijime unike sipas dizajnit tuaj — nga skica deri te dorëzimi final.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[#F4EDE1]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">Koleksioni ynë</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#18161A] tracking-tight">
            Bizhuteri të punuara
            <span className="block italic text-[#D4A744]">me përkushtim.</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6B6570] leading-relaxed">
            Unaza, zinxhirë, vathë dhe byzylykë — ari dhe argjendi i vërtetë, dizajne moderne dhe klasike për çdo rast të veçantë.
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
