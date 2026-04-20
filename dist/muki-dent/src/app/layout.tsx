import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUKI DENT · Prizren",
  description: "MUKI DENT — Prizren. Na telefononi në 049 876 079 ose na shkruani në WhatsApp.",
  keywords: "dentist, klinikë dentare, implant, mbushje, zbardhim dhembesh, ortodonci, Prizren, Kosovë",
  openGraph: {
    title: "MUKI DENT",
    description: "MUKI DENT në Prizren",
    locale: "sq_AL",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
