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
    "Dra. Carolina Marques Mendes, OAB/SP 296.392. Atendimento jurídico individualizado em Santos/SP, com análise técnica, escuta e comunicação clara.",
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
    title: "Carolina Marques Mendes | Advogada em Santos",
    description:
      "Atendimento jurídico individualizado em Santos/SP, com análise técnica, escuta e comunicação clara.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Carolina Marques Mendes Advocacia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Marques Mendes | Advogada em Santos",
    description:
      "Atendimento jurídico individualizado em Santos/SP, com análise técnica, escuta e comunicação clara.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
