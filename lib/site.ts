const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const vercelDeploymentUrl = process.env.VERCEL_URL;
const resolvedHost = explicitUrl ?? vercelProductionUrl ?? vercelDeploymentUrl;

export const siteUrl = resolvedHost
  ? resolvedHost.startsWith("http")
    ? resolvedHost
    : `https://${resolvedHost}`
  : "http://localhost:3000";

export const professionalProfile = {
  name: "Carolina Marques Mendes Advocacia",
  phone: "+55 13 97407-8084",
  email: "carolmmendesadv@gmail.com",
  sameAs: [
    "https://www.instagram.com/dra.carolmarquesmendes/",
    "https://www.facebook.com/dra.carolmarquesmendes",
  ],
} as const;
