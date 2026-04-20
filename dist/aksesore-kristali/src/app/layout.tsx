import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aksesore Kristali · Prizren",
  description: "Aksesore Kristali — Prizren. Na telefononi në 049 425 565 ose na shkruani në WhatsApp.",
  keywords: "bizhuteri, ar, argjend, unaza, zinxhirë, vathë, Prizren, Kosovë",
  openGraph: {
    title: "Aksesore Kristali",
    description: "Aksesore Kristali në Prizren",
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
