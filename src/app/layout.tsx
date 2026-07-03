import type { Metadata, Viewport } from "next";
import { Fraunces, Kaushan_Script, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { restaurantJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

/* Pincel artesanal — ecoa o lettering do logo; usar em pouquíssimas palavras */
const handFont = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Restaurante Mexicano em Natal — Rodízio, Tacos & Margaritas`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "restaurante mexicano natal",
    "comida mexicana natal",
    "rodízio mexicano natal",
    "tacos natal",
    "happy hour natal",
    "restaurante ponta negra",
    "restaurante tirol natal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Restaurante Mexicano em Natal`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Restaurante Mexicano em Natal`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a08",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable} ${handFont.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        <JsonLd data={restaurantJsonLd()} />
        <a
          href="#conteudo"
          className="sr-only z-100 rounded-full bg-terracotta px-6 py-3 font-semibold text-sand focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
