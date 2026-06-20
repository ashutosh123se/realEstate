import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LUXE REALTY — Where Architecture Meets Desire",
    template: "%s | LUXE REALTY",
  },
  description:
    "Curated luxury real estate for the world's most discerning buyers. Premium properties across 40+ countries.",
  keywords: ["luxury real estate", "premium properties", "international real estate", "LUXE REALTY"],
  openGraph: {
    title: "LUXE REALTY — Where Architecture Meets Desire",
    description: "Curated luxury real estate for the world's most discerning buyers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cormorant.variable} ${dmSerif.variable} ${jetbrains.variable} font-body bg-void text-mist antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold-true focus:text-void">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
