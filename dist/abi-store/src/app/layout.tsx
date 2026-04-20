import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abi Store · Prizren",
  description: "Abi Store — Prizren. Na telefononi në 045 920 921 ose na shkruani në WhatsApp.",
  keywords: "supermarket, ushqime, fruta, perime, mish, bukë, dërgesë, Prizren, Kosovë",
  openGraph: {
    title: "Abi Store",
    description: "Abi Store në Prizren",
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
