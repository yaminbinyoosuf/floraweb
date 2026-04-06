import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

/*
  FINAL FONT SYSTEM — NEVER CHANGE THIS

  DISPLAY: Montserrat 900
  ─────────────────────────────────────────────
  The definitive bold display font. Weight 900 at
  clamp(80px–160px) produces the most dramatic,
  premium headline presence available on any font
  service. Used by Netflix, major entertainment
  brands, luxury resorts. The letterforms at
  ultra-large sizes in orange gradient are
  unmatched — tight geometry, zero wasted space.
  "FLORA FANTASIA" in Montserrat 900 is the call.

  BODY: Inter
  ─────────────────────────────────────────────
  Engineered from scratch for screens. Every
  glyph at every size — 11px eyebrow labels to
  18px body copy — is optimised for readability.
  Used by GitHub, Linear, Vercel, Notion. The
  reference standard for screen typography since
  2017. Nothing on Google Fonts touches it.
*/

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.florafantasia.in"),
  title: "Flora Fantasia Amusement Park | Malabar's Own Amusement Park",
  description:
    "Kerala's #1 amusement park — 40+ rides, water world, thrill zone, aquarium, and family attractions in Valancheri, Malappuram. Book tickets instantly on WhatsApp.",
  keywords: [
    "Flora Fantasia",
    "Flora Fantasia Amusement Park",
    "Kerala amusement park",
    "Malabar amusement park",
    "water park Kerala",
    "theme park Kerala",
    "Malappuram park",
  ],
  openGraph: {
    title: "Flora Fantasia Amusement Park",
    description: "40+ rides. Water. Thrill. Family moments — all in one destination.",
    url: "https://www.florafantasia.in",
    siteName: "Flora Fantasia Amusement Park",
    images: ["/flora-fantasia-logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora Fantasia Amusement Park",
    description: "40+ rides. Water. Thrill. Family moments — all in one destination.",
    images: ["/flora-fantasia-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
