import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "RT Creative Studio — Stratégie de contenu & réseaux sociaux",
  description:
    "Stratégie de contenu, vidéos courtes et accompagnement pour PME, indépendants et marques locales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
