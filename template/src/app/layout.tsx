import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "{{META_TITLE}}",
  description: "{{META_DESCRIPTION}}",
  keywords: "{{META_KEYWORDS}}",
  openGraph: {
    title: "{{BUSINESS_NAME}}",
    description: "{{OG_DESCRIPTION}}",
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
