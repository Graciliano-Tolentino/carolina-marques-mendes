import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import "./legal.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carolina Marques Mendes | Advogada em Santos",
    template: "%s | Carolina Marques Mendes",
  },
  description:
    "Dra. Carolina Marques Mendes, OAB/SP 296.392. Atendimento jurídico individualizado em Santos/SP, com análise cuidadosa, escuta e comunicação clara.",
  applicationName: "Carolina Marques Mendes Advocacia",
  authors: [{ name: "Carolina Marques Mendes" }],
  creator: "Carolina Marques Mendes",
  publisher: "Carolina Marques Mendes Advocacia",
  category: "Serviços jurídicos",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Carolina Marques Mendes Advocacia",
    title: "Dra. Carolina Marques Mendes | Advogada em Santos",
    description:
      "Precisa de orientação jurídica? Atendimento individualizado, análise cuidadosa e comunicação clara. Fale diretamente com a Dra. Carolina.",
    images: [
      {
        url: "/og-carolina-marques-mendes-autoridade-2026.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Retrato profissional da Dra. Carolina Marques Mendes em Santos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Carolina Marques Mendes | Advogada em Santos",
    description:
      "Precisa de orientação jurídica? Atendimento individualizado, análise cuidadosa e comunicação clara. Fale diretamente com a Dra. Carolina.",
    images: ["/og-carolina-marques-mendes-autoridade-2026.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon-carolina-balanca-2026.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon-carolina-balanca-2026.png",
    apple: [
      {
        url: "/favicon-carolina-balanca-2026.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071724",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
