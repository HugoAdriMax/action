import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ACTIOM - Formation sur mesure",
  description: "Formation professionnelle innovante pour votre réussite",
  keywords: ["formation", "professionnelle", "compétences", "certification", "CPF"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}