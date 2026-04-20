import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feka Automobile · Vushtrri",
  description: "Feka Automobile — Vushtrri. Na telefononi në 049 444 471 ose na shkruani në WhatsApp.",
  keywords: "autosallon, vetura, BMW, Mercedes, Audi, VW, importim, garanci, Kosovë",
  openGraph: {
    title: "Feka Automobile",
    description: "Feka Automobile në Vushtrri",
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
