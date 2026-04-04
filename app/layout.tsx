import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.florafantasia.in"),
  title: "Flora Fantasia Amusement Park | Malabar's Own Amusement Park",
  description:
    "A cinematic digital park experience for Flora Fantasia Amusement Park in Kerala with water rides, thrill rides, family attractions, and instant WhatsApp booking.",
  keywords: [
    "Flora Fantasia",
    "Flora Fantasia Amusement Park",
    "Kerala amusement park",
    "Malabar amusement park",
    "water park Kerala",
    "theme park Kerala",
  ],
  openGraph: {
    title: "Flora Fantasia Amusement Park",
    description:
      "40+ rides. Water. Thrill. Family moments — all in one destination.",
    url: "https://www.florafantasia.in",
    siteName: "Flora Fantasia Amusement Park",
    images: ["/flora-fantasia-logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora Fantasia Amusement Park",
    description:
      "40+ rides. Water. Thrill. Family moments — all in one destination.",
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
      <body>{children}</body>
    </html>
  );
}
