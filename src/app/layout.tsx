import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono, Archivo, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InlineScript } from "@/components/InlineScript";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Logo lockup only — stands in for the brand book's Acme Gothic Wide (EDR).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["900"],
});

// Logo lockup only — stands in for the brand book's ITC Avant Garde Gothic (26).
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "ED Robotics — Erik Dahlbergsgymnasiet",
  description:
    "ED Robotics är en förening på Erik Dahlbergsgymnasiet i Jönköping som inspirerar och skapar framtidens innovatörer genom FIRST Robotics Competition och RoboCup.",
};

const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      data-theme="light"
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable} ${jetbrainsMono.variable} ${archivo.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        <InlineScript html={themeInitScript} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
