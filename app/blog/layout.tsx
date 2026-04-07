import type { ReactNode } from "react";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function BlogRootLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ colorScheme: "light" }}>
      <FloatingWhatsApp />
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}
