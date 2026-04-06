"use client";

import { useEffect, useState } from "react";
import { BookingSection }    from "@/components/booking-section";
import { BrandStorySection } from "@/components/brand-story-section";
import { CustomCursor }      from "@/components/custom-cursor";
import { FaqSection }        from "@/components/faq-section";
import { FloatingWhatsApp }  from "@/components/floating-whatsapp";
import { Footer }            from "@/components/footer";
import { FooterCta }         from "@/components/footer-cta";
import { GallerySection }    from "@/components/gallery-section";
import { HeroSection }       from "@/components/hero-section";
import { LocationSection }   from "@/components/location-section";
import { MarqueeTicker }     from "@/components/marquee-ticker";
import { PageLoader }        from "@/components/page-loader";
import { PortalScreen }      from "@/components/portal-screen";
import { RideExplorer }      from "@/components/ride-explorer";
import { RippleSurface }     from "@/components/ripple-surface";
import { ScenicStory }       from "@/components/scenic-story";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TopNav }            from "@/components/top-nav";
import { ParkVideoSection }  from "@/components/park-video-section";
import { useLenis }          from "@/hooks/use-lenis";

export function ImmersiveParkExperience() {
  const [entered, setEntered] = useState(false);
  useLenis(entered);

  useEffect(() => {
    document.body.dataset.scrollLocked = String(!entered);
    return () => { delete document.body.dataset.scrollLocked; };
  }, [entered]);

  const scrollToZones = () => {
    document.getElementById("zones")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="park-bg relative overflow-hidden" style={{ colorScheme: "dark" }}>
      <PageLoader />
      <CustomCursor />
      <FloatingWhatsApp />
      <PortalScreen open={entered} onEnter={() => setEntered(true)} />
      <RippleSurface />
      <TopNav />
      <HeroSection onExplore={scrollToZones} />
      <MarqueeTicker />
      <ScenicStory />
      <BrandStorySection />
      <RideExplorer />
      <ParkVideoSection />
      <GallerySection />
      <MarqueeTicker className="opacity-60" />
      <BookingSection />
      <FaqSection />
      <LocationSection />
      <TestimonialsSection />
      <FooterCta />
      <Footer />
    </main>
  );
}
