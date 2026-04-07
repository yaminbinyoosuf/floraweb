import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { LocationSection } from "@/components/location-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Plan Your Visit | Flora Fantasia | Timings, Location, Directions",
  description:
    "Flora Fantasia is open daily 11AM–6PM in Valancheri, Malappuram, Kerala. Get directions, parking info, safety rules, and everything you need for your visit.",
  alternates: { canonical: "https://www.florafantasia.in/plan-your-visit" },
  openGraph: {
    title: "Plan Your Visit | Flora Fantasia | Timings, Directions, Location",
    description: "Open daily 11AM–6PM in Valancheri, Malappuram, Kerala. Get directions and plan your visit.",
    url: "https://www.florafantasia.in/plan-your-visit",
  },
};

export default function PlanVisitPage() {
  return (
    <main className="park-bg relative" style={{ colorScheme: "dark", minHeight: "100vh" }}>
      <FloatingWhatsApp />
      <TopNav />
      <div style={{ paddingTop: "80px" }}>
        <LocationSection />
        <FaqSection />
      </div>
      <Footer />
    </main>
  );
}
