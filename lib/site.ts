const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
const primaryDomain = "https://carolinamarquesmendes.adv.br";
const resolvedHost = explicitUrl ?? primaryDomain;

export const siteUrl = resolvedHost
  ? resolvedHost.startsWith("http")
    ? resolvedHost
    : `https://${resolvedHost}`
  : primaryDomain;

export const professionalProfile = {
  name: "Carolina Marques Mendes Advocacia",
  phone: "+55 13 97407-8084",
  email: "carolmmendesadv@gmail.com",
  sameAs: [
    "https://www.instagram.com/dra.carolmarquesmendes/",
    "https://www.facebook.com/dra.carolmarquesmendes",
  ],
} as const;
