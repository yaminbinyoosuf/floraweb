import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Tickets & Pricing | Flora Fantasia Amusement Park | From ₹600",
  description:
    "Book Flora Fantasia tickets from ₹600. Children ₹600, Adults ₹800, Senior ₹600. Instant WhatsApp confirmation. Open daily 11AM–6PM in Valancheri, Malappuram.",
  alternates: { canonical: "https://www.florafantasia.in/tickets" },
  openGraph: {
    title: "Tickets & Pricing | Flora Fantasia Amusement Park | From ₹600",
    description: "Book Flora Fantasia tickets from ₹600. Instant WhatsApp confirmation.",
    url: "https://www.florafantasia.in/tickets",
  },
};

export default function TicketsPage() {
  return (
    <main className="park-bg relative" style={{ colorScheme: "dark", minHeight: "100vh" }}>
      <FloatingWhatsApp />
      <TopNav />
      <div style={{ paddingTop: "80px" }}>
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
