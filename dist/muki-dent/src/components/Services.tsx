const services = [
  {
    n: "01",
    title: "Kontroll & higjienë",
    description: "Kontroll i plotë, pastrim profesional dhe këshilla për shëndetin e gojës — themeli i një buzëqeshjeje të shëndetshme.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Mbushje estetike",
    description: "Mbushje me kompozit në ngjyrën e dhëmbit tuaj — pa dhimbje, pa metal, rezultat natyral.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Implante dentare",
    description: "Zgjidhje afatgjatë për dhëmbët e humbur — implante të çertifikuara dhe planifikim digjital.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Zbardhim profesional",
    description: "Zbardhim i sigurt në klinikë me teknologji LED — disa nuanca më e çelët në vetëm një vizitë.",
    image: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Ortodonci & aparate",
    description: "Aparate fikse, mobile dhe alignerë transparentë — për dhëmbë të drejtë në çdo moshë.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    title: "Dentisti për fëmijë",
    description: "Ambient miqësor dhe qasje e duruar për fëmijët — vizita e parë te dentisti pa frikë.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[#F0F5F7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">Çfarë trajtojmë</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[#0E1519] tracking-tight">
            Trajtime dentare
            <span className="block italic text-[#5EC8D9]">pa dhimbje. Pa debat.</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6B7880] leading-relaxed">
            Nga kontrolli rutinor te implantet — teknologji moderne, materiale të çertifikuara dhe ekip që di çfarë bën.
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
                  <span className="eyebrow text-[#7DD4E2]">
                    {service.n}
                  </span>
                  <span className="w-10 h-px bg-[#D5DCE0]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#0E1519] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B7880] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#0E1519] text-white font-medium px-8 py-3.5 rounded-full text-[0.9rem] tracking-wide transition-all hover:bg-[#5EC8D9]"
          >
            Rezervo Vizitën
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
