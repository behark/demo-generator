const services = [
  {
    n: "01",
    title: "{{SERVICE_1_TITLE}}",
    description: "{{SERVICE_1_DESC}}",
    image: "{{SERVICE_1_IMAGE}}",
  },
  {
    n: "02",
    title: "{{SERVICE_2_TITLE}}",
    description: "{{SERVICE_2_DESC}}",
    image: "{{SERVICE_2_IMAGE}}",
  },
  {
    n: "03",
    title: "{{SERVICE_3_TITLE}}",
    description: "{{SERVICE_3_DESC}}",
    image: "{{SERVICE_3_IMAGE}}",
  },
  {
    n: "04",
    title: "{{SERVICE_4_TITLE}}",
    description: "{{SERVICE_4_DESC}}",
    image: "{{SERVICE_4_IMAGE}}",
  },
  {
    n: "05",
    title: "{{SERVICE_5_TITLE}}",
    description: "{{SERVICE_5_DESC}}",
    image: "{{SERVICE_5_IMAGE}}",
  },
  {
    n: "06",
    title: "{{SERVICE_6_TITLE}}",
    description: "{{SERVICE_6_DESC}}",
    image: "{{SERVICE_6_IMAGE}}",
  },
];

export default function Services() {
  return (
    <section id="sherbime" className="relative py-24 sm:py-32 bg-[{{COLOR_CREAM}}]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="eyebrow mb-4">{{SERVICES_EYEBROW}}</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-[{{COLOR_INK}}] tracking-tight">
            {{SERVICES_TITLE_MAIN}}
            <span className="block italic text-[{{COLOR_PRIMARY}}]">{{SERVICES_TITLE_ITALIC}}</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[{{COLOR_MUTED}}] leading-relaxed">
            {{SERVICES_DESCRIPTION}}
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
                  <span className="eyebrow text-[{{COLOR_SECONDARY}}]">
                    {service.n}
                  </span>
                  <span className="w-10 h-px bg-[{{COLOR_HAIRLINE}}]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[{{COLOR_INK}}] mb-3">
                  {service.title}
                </h3>
                <p className="text-[{{COLOR_MUTED}}] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[{{COLOR_INK}}] text-white font-medium px-8 py-3.5 rounded-full text-[0.9rem] tracking-wide transition-all hover:bg-[{{COLOR_PRIMARY}}]"
          >
            {{CTA_PRIMARY_LABEL}}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
