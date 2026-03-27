import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aprobados | Tu Éxito es Nuestra Meta",
  description:
    "Centro de estudios privado en Tánger. Apoyo académico personalizado para el sistema educativo español. Primaria, ESO y Bachillerato.",
  authors: [{ name: "Aprobados" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
