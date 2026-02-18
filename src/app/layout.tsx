

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

// Metadata optimizada para SABOR
export const metadata: Metadata = {
  title: {
    default: "SABOR – Sistema Automatizado para Bares y Restaurantes",
    template: "%s | SABOR", // por si agregas páginas con título más adelante
  },
  description:
    "Control total de ventas, inventario, mesas, comandas y reportes en tiempo real. Software POS fácil y poderoso para bares, restaurantes, fondas y taquerías en México.",
  keywords: [
    "POS para restaurantes",
    "software para bares",
    "sistema punto de venta México",
    "control inventario restaurante",
    "comandas electrónicas",
    "reportes ventas bar",
    "software restaurante México",
  ].join(", "),
  authors: [{ name: "Carlos Velázquez", url: "https://twitter.com/rbtsigma" }], // opcional, pero queda pro
  creator: "Carlos Velázquez",
  publisher: "SABOR",
  // Para mejorar SEO y compartir en redes
  openGraph: {
    title: "SABOR – Revoluciona tu bar o restaurante",
    description:
      "Sistema todo-en-uno: punto de venta rápido, inventario inteligente, control de mesas y reportes claros. Más ganancias, menos estrés.",
    url: "https://tusitio.com",               // ← cámbialo cuando tengas el dominio real
    siteName: "SABOR",
    images: [
      {
        url: "/logo.png",                     // usa tu logo como fallback (ideal 1200×630)
        width: 1200,
        height: 630,
        alt: "SABOR - Sistema para Bares y Restaurantes",
      },
      // Si después subes una imagen específica tipo banner → agrégala aquí
      // { url: "/og-image.jpg", width: 1200, height: 630 },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SABOR – Sistema Automatizado para Bares y Restaurantes",
    description:
      "Control de ventas, inventario y mesas en tiempo real. Ideal para tu negocio en México.",
    images: ["/logo.png"],                    // mismo logo como fallback
    creator: "@rbtsigma",
  },
  // Iconos / manifest (Next.js los toma de /public automáticamente si existen)
  // Si tienes favicon.ico, apple-touch-icon.png o icon.png en /public/ → se usan solos
  icons: {
    icon: "/logo.png",                        // favicon genérico (puedes crear uno de 32x32 después)
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  // Mejora mobile
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  // Canonical cuando tengas dominio
  // alternates: { canonical: "https://tusitio.com" },
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
