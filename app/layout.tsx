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
  title: "KM 3D | Catálogo de Impressão 3D",
  description:
    "Transformando ideias em realidade. Confira nosso catálogo de Action Figures, Peças Técnicas e Suportes Personalizados.",

  // This is what WhatsApp looks for:
  openGraph: {
    title: "KM 3D | Catálogo Oficial",
    description: "Explore os melhores modelos 3D produzidos com alta precisão.",
    url: "https://km-3d.vercel.app/", // Replace with your real URL later
    siteName: "KM 3D",
    images: [
      {
        url: "/logo.jpeg", // A version of your logo optimized for sharing
        width: 1200,
        height: 630,
        alt: "KM 3D Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Twitter card for extra professional polish
  twitter: {
    card: "summary_large_image",
    title: "KM 3D",
    description: "Modelos 3D de alta qualidade.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
