import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const siteUrl = "https://rt-creativestudio.fr";

export const metadata: Metadata = {
  title: "RT Creative Studio — Stratégie de contenu & réseaux sociaux",
  description:
    "Stratégie de contenu, vidéos courtes et accompagnement pour PME, indépendants et marques locales.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "RT Creative Studio",
    description:
      "Stratégie de contenu, vidéos courtes et accompagnement pour PME, indépendants et marques locales.",
    url: siteUrl,
    siteName: "RT Creative Studio",
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RT Creative Studio",
    description:
      "Stratégie de contenu, vidéos courtes et accompagnement pour PME, indépendants et marques locales.",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RT Creative Studio",
  url: siteUrl,
  logo: `${siteUrl}/images/rt-logo.webp`,
  email: "bonjour@rt-creativestudio.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
