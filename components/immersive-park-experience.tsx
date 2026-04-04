"use client";

import { useEffect, useState } from "react";
import { BookingSection } from "@/components/booking-section";
import { BrandStorySection } from "@/components/brand-story-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { LocationSection } from "@/components/location-section";
import { PortalScreen } from "@/components/portal-screen";
import { RideExplorer } from "@/components/ride-explorer";
import { RippleSurface } from "@/components/ripple-surface";
import { ScenicStory } from "@/components/scenic-story";
import { WaveDivider } from "@/components/ui";
import { useLenis } from "@/hooks/use-lenis";

export function ImmersiveParkExperience() {
  const [entered, setEntered] = useState(false);
  useLenis(entered);

  useEffect(() => {
    document.body.dataset.scrollLocked = String(!entered);

    return () => {
      delete document.body.dataset.scrollLocked;
    };
  }, [entered]);

  const scrollToZones = () => {
    document.getElementById("zones")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="park-bg relative overflow-hidden">
      <PortalScreen open={entered} onEnter={() => setEntered(true)} />
      <RippleSurface />
      <HeroSection onExplore={scrollToZones} />
      <WaveDivider />
      <ScenicStory />
      <WaveDivider flip />
      <BrandStorySection />
      <WaveDivider />
      <RideExplorer />
      <GallerySection />
      <BookingSection />
      <FaqSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
