import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "T-Renova 57 — Carreleur à Montigny-lès-Metz | Carrelage & Rénovation en Moselle",
  description:
    "T-Renova 57, entreprise de carrelage et rénovation à Montigny-lès-Metz. Pose de carrelage intérieur et extérieur, rénovation salle de bain, terrasse et balcon en Moselle (57). Devis gratuit.",
  keywords:
    "carreleur Montigny-lès-Metz, carrelage Metz, pose carrelage Moselle, rénovation salle de bain, carreleur Moselle 57",
  openGraph: {
    title: "T-Renova 57 — Carreleur à Montigny-lès-Metz",
    description:
      "Spécialiste en pose de carrelage et rénovation en Moselle. Devis gratuit.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
