import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TELEFONE } from "./data";
import { formatPhoneNumber } from "./utils/formatTelefone";

// 1. Otimização de Performance de Fonte (CLS)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://km-3d.vercel.app"),

  // 2. Otimização Semântica para SEO Local (São Luís)
  title: "KM 3D | Impressão 3D em São Luís - MA",
  description:
    "Serviços profissionais de impressão 3D em São Luís, Maranhão. Prototipagem, Action Figures, peças técnicas e suportes personalizados sob medida.",
  keywords: [
    "Impressão 3D São Luís",
    "Prototipagem 3D Maranhão",
    "Action Figures São Luís",
    "Serviço de impressão 3D",
    "Peças Técnicas 3D",
  ],

  // 3. Prevenção de Conteúdo Duplicado (Canonical)
  alternates: {
    canonical: "/",
  },

  // 4. Diretivas de Rastreamento Avançadas
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "KM 3D | Serviços de Impressão 3D em São Luís",
    description:
      "Transformando ideias em realidade. Peças sob medida, protótipos e action figures com alta precisão no Maranhão.",
    url: "https://km-3d.vercel.app/",
    siteName: "KM 3D",
    images: [
      {
        url: "/icon.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfólio de Impressão 3D da KM 3D em São Luís",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KM 3D | Impressão 3D em São Luís",
    description: "Modelos 3D de alta qualidade e prototipagem rápida.",
    images: ["/icon.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 5. Estrutura de Dados JSON-LD para o Google Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KM 3D",
    description:
      "Serviços profissionais de Impressão 3D e Prototipagem Rápida.",
    url: "https://km-3d.vercel.app/",
    telephone: formatPhoneNumber(TELEFONE), // Substitua elo seu telefone (DDD 98)
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Luís",
      addressRegion: "MA",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-2.5297", // Coordenadas centrais de São Luís
      longitude: "-44.3028",
    },
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Injeção segura do Schema.org no DOM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
