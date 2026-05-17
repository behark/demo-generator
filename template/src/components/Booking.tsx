"use client";

import { useState } from "react";

const SERVICES = "{{BOOKING_SERVICE_OPTIONS}}".split("|").map((s) => s.trim()).filter(Boolean);

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0] ?? "");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `*Rezervim i ri — {{BUSINESS_NAME}}*`,
      ``,
      `Emri: ${name}`,
      `Telefoni: ${phone}`,
      service ? `Shërbimi: ${service}` : null,
      date ? `Data e preferuar: ${date}` : null,
      note ? `Shënim: ${note}` : null,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/{{PHONE_INTL_DIGITS}}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="reservierung"
      className="relative py-20 sm:py-32 bg-[{{COLOR_CREAM}}] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[1fr,1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="eyebrow mb-4">{{ BOOKING_EYEBROW }}</div>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[{{COLOR_INK}}]">
              {{ BOOKING_TITLE_MAIN }}
              <span className="block italic font-normal text-[{{COLOR_PRIMARY}}]">
                {{ BOOKING_TITLE_ITALIC }}
              </span>
            </h2>
            <p className="text-[{{COLOR_MUTED}}] text-[1.02rem] leading-relaxed mt-6 max-w-md">
              {{ BOOKING_DESCRIPTION }}
            </p>
            <div className="flex items-center gap-3 mt-8 text-[{{COLOR_MUTED}}] text-sm">
              <svg className="w-5 h-5 text-[{{COLOR_PRIMARY}}] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.27 4.84L2 22l5.33-1.39A9.9 9.9 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Z" />
              </svg>
              <span>Rezervimi ju çon direkt në WhatsApp — e konfirmojmë terminin shpejt.</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border hairline rounded-lg p-6 sm:p-8 shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-[{{COLOR_INK}}] text-sm font-medium mb-1.5">Emri juaj</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border hairline rounded bg-white text-[{{COLOR_INK}}] focus:outline-none focus:border-[{{COLOR_PRIMARY}}] transition-colors"
                  placeholder="Emri dhe Mbiemri"
                />
              </div>
              <div>
                <label className="block text-[{{COLOR_INK}}] text-sm font-medium mb-1.5">Telefon</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border hairline rounded bg-white text-[{{COLOR_INK}}] focus:outline-none focus:border-[{{COLOR_PRIMARY}}] transition-colors"
                  placeholder="+383 4X XXX XXX"
                />
              </div>
              {SERVICES.length > 0 && (
                <div>
                  <label className="block text-[{{COLOR_INK}}] text-sm font-medium mb-1.5">Shërbimi</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 border hairline rounded bg-white text-[{{COLOR_INK}}] focus:outline-none focus:border-[{{COLOR_PRIMARY}}] transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="block text-[{{COLOR_INK}}] text-sm font-medium mb-1.5">Data e preferuar</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border hairline rounded bg-white text-[{{COLOR_INK}}] focus:outline-none focus:border-[{{COLOR_PRIMARY}}] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[{{COLOR_INK}}] text-sm font-medium mb-1.5">Shënim (opsionale)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 border hairline rounded bg-white text-[{{COLOR_INK}}] focus:outline-none focus:border-[{{COLOR_PRIMARY}}] transition-colors resize-none"
                  placeholder="Diçka që duhet ta dimë?"
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 bg-[{{COLOR_PRIMARY}}] hover:bg-[{{COLOR_PRIMARY_DARK}}] text-white font-medium px-6 py-4 rounded-full text-[0.95rem] tracking-wide transition-colors"
              >
                {{ BOOKING_SUBMIT_LABEL }}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
