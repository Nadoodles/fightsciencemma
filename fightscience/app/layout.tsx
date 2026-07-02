import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Fight Science MMA | MMA, BJJ & Fitness in Mid-City Los Angeles",
    template: "%s | Fight Science MMA",
  },
  description:
    "Fight Science MMA is a family-friendly MMA, Brazilian Jiu-Jitsu, and fitness gym in Mid-City Los Angeles, coached by Ian Harris and a team of pro fighters since 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased">
        <a id="top" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
