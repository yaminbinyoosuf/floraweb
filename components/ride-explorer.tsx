"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui";
import { rideCategories, rides, type Ride, type RideCategory } from "@/lib/data";
import { smoothEase, springMedium } from "@/lib/motion";

const categoryAccent: Record<RideCategory, { color: string; glow: string; pill: string }> = {
  "Water Rides":  { color: "#1BB8E8", glow: "rgba(27,184,232,0.25)",  pill: "bg-[rgba(27,184,232,0.15)] border-[rgba(27,184,232,0.4)] text-[#1BB8E8]" },
  "Thrill Rides": { color: "#D4780A", glow: "rgba(212,120,10,0.25)",  pill: "bg-[rgba(212,120,10,0.15)] border-[rgba(212,120,10,0.4)] text-[#F5A623]" },
  "Family Rides": { color: "#F5C842", glow: "rgba(245,200,66,0.22)",  pill: "bg-[rgba(245,200,66,0.12)] border-[rgba(245,200,66,0.35)] text-[#F5C842]" },
};

export function RideExplorer() {
  const [activeCategory, setActiveCategory] = useState<RideCategory>("Water Rides");
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);

  const filteredRides = useMemo(() => rides.filter(r => r.category === activeCategory), [activeCategory]);
  const cfg = categoryAccent[activeCategory];

  return (
    <section
      id="rides"
      className="section-padding relative overflow-hidden noise"
      style={{ background: "#0B1822" }}
    >
      {/* Ambient */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-72 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(212,120,10,0.07), transparent 60%)" }}
      />

      <div className="shell">
        <SectionHeading
          eyebrow="Attractions"
          title="Pulse-pounding adventures, family favorites, and water stories."
          text="Explore our signature rides across Water, Thrill, and Family zones."
          eyebrowColor="blue"
        />

        {/* Filter tabs */}
        <LayoutGroup>
          <div className="mt-10 flex flex-wrap gap-3">
            {rideCategories.map((cat) => {
              const active = cat === activeCategory;
              const c = categoryAccent[cat];
              return (
                <motion.button
                  key={cat}
                  layout
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.97 }}
                  transition={springMedium}
                  className="relative rounded-full px-7 py-3 font-sans font-semibold transition-all duration-300"
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-sans)",
                    color: active ? c.color : "rgba(255,255,255,0.5)",
                    border: active ? `1px solid ${c.color}55` : "1px solid rgba(255,255,255,0.12)",
                    background: active ? `${c.color}18` : "rgba(255,255,255,0.03)",
                    boxShadow: active ? `0 0 20px ${c.glow}` : "none",
                  }}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Rides grid + sidebar */}
        <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_320px]">
          {/* Ride cards grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filteredRides.map((ride, i) => (
                <motion.div
                  key={`${activeCategory}-${ride.title}`}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: smoothEase }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedRide(ride)}
                    className="group relative w-full overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${cfg.color}55`;
                      el.style.boxShadow = `0 0 24px ${cfg.glow}`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Ride icon */}
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${cfg.color}18`, border: `1px solid ${cfg.color}35` }}>
                      <Image
                        src={ride.image}
                        alt={ride.title}
                        width={32}
                        height={32}
                        className="opacity-80"
                        style={{ filter: `drop-shadow(0 0 4px ${cfg.color})` }}
                      />
                    </div>

                    <h3
                      className="font-display font-bold text-white"
                      style={{ fontSize: "20px", letterSpacing: "-0.02em" }}
                    >
                      {ride.title}
                    </h3>
                    <p
                      className="mt-2 text-white/55"
                      style={{ fontSize: "14px", lineHeight: "1.65", fontFamily: "var(--font-sans)" }}
                    >
                      {ride.blurb}
                    </p>

                    {/* Hover CTA */}
                    <div
                      className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: cfg.color, fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                    >
                      See Details
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M1 5h8M5 1l4 4-4 4"/>
                      </svg>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p
              className="uppercase text-[#1BB8E8]"
              style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", fontFamily: "var(--font-sans)" }}
            >
              Attraction Notes
            </p>
            <h3
              className="mt-4 font-display font-black text-white text-balance"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Find the right pace for every visitor.
            </h3>
            <p
              className="mt-5 text-white/50"
              style={{ fontSize: "0.93rem", lineHeight: "1.88", fontFamily: "var(--font-sans)" }}
            >
              Flora Fantasia blends water rides, high-energy thrill attractions, and
              calmer family zones — so every visitor finds exactly the right pace.
            </p>
            <div className="mt-8 flex flex-col gap-2">
              {filteredRides.map((ride) => (
                <button
                  key={`${ride.title}-list`}
                  type="button"
                  onClick={() => setSelectedRide(ride)}
                  className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${cfg.color}44`; e.currentTarget.style.background = `${cfg.color}0D`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                >
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: cfg.color }}
                  />
                  <span
                    className="font-medium text-white/70 transition-colors group-hover:text-white"
                    style={{ fontSize: "0.93rem", fontFamily: "var(--font-sans)" }}
                  >
                    {ride.title}
                  </span>
                </button>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Ride detail modal */}
      <AnimatePresence>
        {selectedRide && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-10 backdrop-blur-2xl"
            style={{ background: "rgba(11,24,34,0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRide(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl"
              style={{ background: "#0F2430", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] border ${categoryAccent[selectedRide.category].pill}`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {selectedRide.category}
                    </span>
                    <h3
                      className="mt-3 font-display font-black text-white"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
                    >
                      {selectedRide.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedRide(null)}
                    className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full text-white/40 transition hover:text-white hover:bg-white/10"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M1 1l12 12M13 1L1 13"/>
                    </svg>
                  </button>
                </div>
                <p
                  className="mt-6 text-white/60"
                  style={{ fontSize: "1.04rem", lineHeight: "1.88", fontFamily: "var(--font-sans)" }}
                >
                  {selectedRide.blurb}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#booking"
                    onClick={() => setSelectedRide(null)}
                    className="rounded-full px-7 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
                    style={{ background: "#D4780A", fontFamily: "var(--font-sans)", boxShadow: "0 6px 20px rgba(212,120,10,0.35)" }}
                  >
                    Book Tickets
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedRide(null)}
                    className="rounded-full px-7 py-3 text-[14px] font-semibold text-white/70 transition hover:text-white hover:bg-white/08"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", fontFamily: "var(--font-sans)" }}
                  >
                    Back to Explorer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
