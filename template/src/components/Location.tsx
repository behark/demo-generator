export default function Location() {
  return (
    <section id="lokacion" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="eyebrow mb-4">{{LOCATION_EYEBROW}}</div>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[{{COLOR_INK}}]">
            {{LOCATION_TITLE_MAIN}},
            <span className="block italic font-normal text-[{{COLOR_PRIMARY}}]">{{LOCATION_TITLE_ITALIC}}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="grid sm:grid-cols-2 gap-6 self-start">
            <div className="border-t border-[{{COLOR_INK}}] pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Adresa</div>
              <p className="text-[{{COLOR_INK}}]/75 leading-relaxed">
                {{ADDRESS_LINE_1}}<br />{{ADDRESS_LINE_2}}
              </p>
              <p className="text-xs text-[{{COLOR_INK}}]/45 mt-2 italic">
                {{ADDRESS_NOTE}}
              </p>
            </div>
            <div className="border-t border-[{{COLOR_INK}}] pt-6">
              <div className="eyebrow mb-2">Telefon</div>
              <a href="tel:+{{PHONE_INTL_DIGITS}}" className="text-[{{COLOR_INK}}] hover:text-[{{COLOR_PRIMARY}}] transition-colors tabular-nums font-semibold">
                {{PHONE_LOCAL}}
              </a>
            </div>
            <div className="border-t border-[{{COLOR_INK}}] pt-6">
              <div className="eyebrow mb-2">WhatsApp</div>
              <a
                href="https://wa.me/{{PHONE_INTL_DIGITS}}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[{{COLOR_INK}}] hover:text-[{{COLOR_PRIMARY}}] transition-colors tabular-nums"
              >
                +{{PHONE_INTL_FORMATTED}}
              </a>
            </div>
            <div className="border-t border-[{{COLOR_INK}}] pt-6 sm:col-span-2">
              <div className="eyebrow mb-3">Orari</div>
              <div className="text-[{{COLOR_INK}}]/75 space-y-1.5 tabular-nums">
                <div className="flex justify-between gap-6"><span>E hënë – E premte</span><span>{{HOURS_WEEKDAY}}</span></div>
                <div className="flex justify-between gap-6"><span>E shtunë</span><span>{{HOURS_SATURDAY}}</span></div>
                <div className="flex justify-between gap-6"><span>E diel</span><span className="text-[{{COLOR_PRIMARY}}]">{{HOURS_SUNDAY}}</span></div>
              </div>
            </div>
            <div className="border-t border-[{{COLOR_INK}}] pt-6 sm:col-span-2">
              <div className="eyebrow mb-2">Mirë të dini</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[{{COLOR_INK}}]/70">
                <span>· {{PERK_1}}</span>
                <span>· {{PERK_2}}</span>
                <span>· {{PERK_3}}</span>
                <span>· {{PERK_4}}</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow-xl min-h-[480px] bg-[{{COLOR_HAIRLINE}}]">
            <iframe
              src="{{MAPS_EMBED_URL}}"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", filter: "grayscale(0.2) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="{{BUSINESS_NAME}} Lokacion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
