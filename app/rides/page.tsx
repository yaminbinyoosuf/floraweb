import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { RideExplorer } from "@/components/ride-explorer";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "40+ Rides & Attractions | Flora Fantasia | Water, Thrill & Family Rides",
  description:
    "Explore 40+ rides at Flora Fantasia — Tornado, Wave Pool, Cyclone Coaster, Harakkiri, Rain Dance, 50 Feet Water Fall and more. Water, Dry and Family rides for all ages.",
  alternates: { canonical: "https://www.florafantasia.in/rides" },
  openGraph: {
    title: "40+ Rides & Attractions | Flora Fantasia Amusement Park Kerala",
    description: "Explore 40+ rides at Flora Fantasia — water, thrill, family and aquarium worlds.",
    url: "https://www.florafantasia.in/rides",
  },
};

export default function RidesPage() {
  return (
    <main className="park-bg relative" style={{ colorScheme: "dark", minHeight: "100vh" }}>
      <FloatingWhatsApp />
      <TopNav />
      <div style={{ paddingTop: "80px" }}>
        <RideExplorer />
      </div>
      <Footer />
    </main>
  );
}
