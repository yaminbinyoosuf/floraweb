import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Flora Fantasia Amusement Park | Malabar's Own Amusement Park | Valancheri",
  description:
    "Kerala's #1 amusement park — 40+ rides, Fish Aquarium, Cyclone Coaster, Wave Pool, Rain Dance and more. Open daily 11AM–6PM. Book tickets via WhatsApp instantly.",
  keywords: [
    "Flora Fantasia",
    "flora fantasy",
    "amusement park Malappuram",
    "water park Kerala",
    "theme park Malabar",
    "family park Valancheri",
    "fish aquarium Malappuram",
    "Kerala amusement park",
  ],
  openGraph: {
    title: "Flora Fantasia Amusement Park | 40+ Rides | Kerala",
    description: "Malabar's own amusement park — water rides, thrill rides, Fish Aquarium and family fun in Valancheri, Malappuram.",
    url: "https://www.florafantasia.in",
    siteName: "Flora Fantasia Amusement Park",
    images: ["/gallery-real/drone-overview.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora Fantasia Amusement Park | 40+ Rides | Kerala",
    description: "Malabar's own amusement park — water rides, thrill rides, Fish Aquarium and family fun in Valancheri, Malappuram.",
    images: ["/gallery-real/drone-overview.jpeg"],
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "AmusementPark",
  "name": "Flora Fantasia Amusement Park",
  "url": "https://florafantasia.com",
  "logo": "https://florafantasia.com/flora-fantasia-logo.jpeg",
  "image": "https://florafantasia.com/gallery-real/drone-overview.jpeg",
  "description": "Kerala's #1 amusement park with 40+ rides including water rides, dry rides, Fish Aquarium, Cyclone Coaster and more. Located in Valancheri, Malappuram.",
  "telephone": "+919745239003",
  "email": "florafantasiapark@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vengad, Puramannur Road, Kizhmuri, Vengad",
    "addressLocality": "Valancheri",
    "addressRegion": "Kerala",
    "postalCode": "676552",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.9827",
    "longitude": "76.0742",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "11:00",
    "closes": "18:00",
  },
  "priceRange": "₹600 - ₹800",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, UPI, Google Pay",
  "sameAs": [
    "https://www.instagram.com/florafantasiaamusementpark_",
    "https://www.facebook.com/florafantasiavengaad/",
    "https://www.youtube.com/@florafantasiaamusementpark",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
