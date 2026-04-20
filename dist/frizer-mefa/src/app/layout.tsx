import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frizer Mefa · Gjilan",
  description: "Frizer Mefa — Gjilan. Na telefononi në 048 308 655 ose na shkruani në WhatsApp.",
  keywords: "frizer, berber, prerje flokësh, mjekrra, Kosovë",
  openGraph: {
    title: "Frizer Mefa",
    description: "Frizer Mefa në Gjilan",
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
