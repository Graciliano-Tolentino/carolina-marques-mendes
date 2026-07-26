import type { Metadata } from "next";
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
    default: "Carolina Marques Mendes | Advocacia em Santos",
    template: "%s | Carolina Marques Mendes",
  },
  description: "Atendimento jurídico individualizado, com análise técnica, escuta e comunicação clara em Santos/SP.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Carolina Marques Mendes Advocacia",
    title: "Carolina Marques Mendes | Advocacia em Santos",
    description: "Atendimento jurídico individualizado, com análise técnica, escuta e comunicação clara em Santos/SP.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Carolina Marques Mendes Advocacia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Marques Mendes | Advocacia em Santos",
    description: "Atendimento jurídico individualizado, com análise técnica, escuta e comunicação clara em Santos/SP.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
