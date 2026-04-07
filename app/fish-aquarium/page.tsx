import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { FishAquariumSection } from "@/components/fish-aquarium-section";
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Fish Aquarium | Flora Fantasia | Malabar's Best Aquarium Experience",
  description:
    "Flora Fantasia's Fish Aquarium features exotic marine life in millions of litres of water. A unique aquatic experience for families in Valancheri, Malappuram, Kerala.",
  alternates: { canonical: "https://www.florafantasia.in/fish-aquarium" },
  openGraph: {
    title: "Fish Aquarium | Flora Fantasia | Malabar's Best Aquarium Experience",
    description: "Exotic marine life, tropical fish and rare aquatic species — Flora Fantasia's Fish Aquarium in Valancheri, Malappuram.",
    url: "https://www.florafantasia.in/fish-aquarium",
    images: ["/gallery-real/aquarium-kids.jpeg"],
  },
};

export default function FishAquariumPage() {
  return (
    <main className="park-bg relative" style={{ colorScheme: "dark", minHeight: "100vh" }}>
      <FloatingWhatsApp />
      <TopNav />
      <div style={{ paddingTop: "80px" }}>
        <FishAquariumSection />
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
