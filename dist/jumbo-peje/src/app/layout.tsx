import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jumbo Pejë · Pejë",
  description: "Jumbo Pejë — Pejë. Na telefononi në 048 999 016 ose na shkruani në WhatsApp.",
  keywords: "dyqan, produkte shtëpie, lodra, tekstil, dekor, veshmbathje, Kosovë",
  openGraph: {
    title: "Jumbo Pejë",
    description: "Jumbo Pejë në Pejë",
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
