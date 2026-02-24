import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. ADD THIS: It tells Next.js how to build absolute URLs for your images
  metadataBase: new URL("https://km-3d.vercel.app"),

  title: "KM 3D | Catálogo de Impressão 3D",
  description:
    "Transformando ideias em realidade. Confira nosso catálogo de Action Figures, Peças Técnicas e Suportes Personalizados.",

  openGraph: {
    title: "KM 3D | Catálogo Oficial",
    description: "Explore os melhores modelos 3D produzidos com alta precisão.",
    url: "https://km-3d.vercel.app/",
    siteName: "KM 3D",
    images: [
      {
        url: "/icon.jpeg", // Ensure this file is in your /public folder!
        width: 1200,
        height: 630,
        alt: "KM 3D Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KM 3D",
    description: "Modelos 3D de alta qualidade.",
    images: ["/icon.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 2. UPDATE THIS: Apply the font variables and antialiased class */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
