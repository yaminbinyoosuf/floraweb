"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { TiltCard } from "@/components/tilt-card";
import { LiquidButton, SectionHeading } from "@/components/ui";
import { rideCategories, rides, type Ride, type RideCategory } from "@/lib/data";
import { smoothEase, springMedium } from "@/lib/motion";

export function RideExplorer() {
  const [activeCategory, setActiveCategory] = useState<RideCategory>("Water Rides");
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);

  const filteredRides = useMemo(
    () => rides.filter((ride) => ride.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="rides" className="section-padding relative">
      <div className="shell">
        <SectionHeading
          eyebrow="Ride Explorer"
          title="Browse the park like a curated attraction map."
          text="Switch between ride families, hover to feel the depth, and zoom into signature attractions without leaving the scene."
        />

        <LayoutGroup>
          <div className="mt-10 flex flex-wrap gap-3">
          {rideCategories.map((category) => {
            const active = category === activeCategory;

            return (
              <motion.button
                key={category}
                layout
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[linear-gradient(180deg,#111821_0%,#1c2a39_100%)] text-white shadow-[0_18px_36px_rgba(15,23,34,0.14)]"
                    : "border border-[rgba(16,24,32,0.08)] bg-white/82 text-[var(--text-300)] hover:bg-white"
                }`}
                data-ripple
                whileTap={{ scale: 0.98 }}
                transition={springMedium}
              >
                {category}
              </motion.button>
            );
          })}
          </div>
        </LayoutGroup>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 perspective-1800">
          {filteredRides.map((ride, index) => (
            <motion.div
              key={ride.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.7, delay: index * 0.04, ease: smoothEase }}
              className="h-full"
            >
              <TiltCard
                className="h-full rounded-[2rem]"
                glare={
                  activeCategory === "Thrill Rides"
                    ? "rgba(255,122,24,0.22)"
                    : activeCategory === "Family Rides"
                      ? "rgba(255,207,115,0.22)"
                      : "rgba(89,208,255,0.24)"
                }
              >
                <button
                  type="button"
                  onClick={() => setSelectedRide(ride)}
                  className="glass-panel premium-border relative h-full overflow-hidden rounded-[2rem] text-left"
                  data-ripple
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={ride.image}
                      alt={ride.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(2,7,16,0.78)_100%)]" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/55 bg-white/78 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--text-100)] shadow-[0_6px_20px_rgba(15,23,34,0.08)]">
                      {ride.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1.7rem] font-semibold tracking-[-0.03em] text-[var(--text-100)]">{ride.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[var(--text-300)]">
                      {ride.blurb}
                    </p>
                  </div>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedRide ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(20,38,61,0.24)] px-5 py-10 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRide(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.65, ease: smoothEase }}
              className="glass-panel premium-border relative w-full max-w-4xl overflow-hidden rounded-[2rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[320px]">
                  <Image
                    src={selectedRide.image}
                    alt={selectedRide.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(2,7,16,0.84)_100%)]" />
                </div>
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <p className="eyebrow">{selectedRide.category}</p>
                    <h3 className="mt-5 text-4xl font-semibold text-[var(--text-100)]">
                      {selectedRide.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-[var(--text-300)]">
                      {selectedRide.blurb}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <LiquidButton onClick={() => setSelectedRide(null)}>
                      Back to Explorer
                    </LiquidButton>
                    <LiquidButton href="#booking" variant="secondary">
                      See Booking
                    </LiquidButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
