"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { ridesData, type RideItem } from "@/lib/data";
import { smoothEase, springMedium } from "@/lib/motion";

type TabKey = "water" | "dry" | "new" | "aquarium";

const tabs: { key: TabKey; label: string; count: number; color: string; glow: string }[] = [
  { key: "water",    label: "Water Rides",   count: 19, color: "#1BB8E8", glow: "rgba(27,184,232,0.25)"  },
  { key: "dry",      label: "Dry Rides",     count: 20, color: "#D4780A", glow: "rgba(212,120,10,0.25)"  },
  { key: "new",      label: "New Rides",     count: 2,  color: "#F5C842", glow: "rgba(245,200,66,0.22)"  },
  { key: "aquarium", label: "Fish Aquarium", count: 0,  color: "#1BB8E8", glow: "rgba(27,184,232,0.25)"  },
];

export function RideExplorer() {
  const [activeTab, setActiveTab] = useState<TabKey>("water");
  const [selected, setSelected] = useState<RideItem | null>(null);

  const tab = tabs.find(t => t.key === activeTab)!;
  const rides: RideItem[] = activeTab === "aquarium" ? [] : ridesData[activeTab as keyof typeof ridesData];

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
          title="40+ rides across water, thrill, family and aquarium worlds."
          text="Explore every attraction Flora Fantasia has to offer — from water slides to coasters to marine life."
          eyebrowColor="blue"
        />
        <div className="mt-3">
          <a
            href="/blog/flora-fantasia-school-trip-guide"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.04em" }}
          >
            Planning a school trip? Read our teacher&apos;s guide
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 5h8M5 1l4 4-4 4"/>
            </svg>
          </a>
        </div>

        {/* Filter tabs */}
        <LayoutGroup>
          <div className="mt-10 flex flex-wrap gap-3">
            {tabs.map((t) => {
              const active = t.key === activeTab;
              return (
                <motion.button
                  key={t.key}
                  layout
                  type="button"
                  onClick={() => setActiveTab(t.key)}
                  whileTap={{ scale: 0.97 }}
                  transition={springMedium}
                  className="relative rounded-full px-5 py-2.5 font-sans font-semibold transition-all duration-300"
                  style={{
                    fontSize: "13px",
                    fontFamily: "var(--font-sans)",
                    color: active ? t.color : "rgba(255,255,255,0.5)",
                    border: active ? `1px solid ${t.color}55` : "1px solid rgba(255,255,255,0.12)",
                    background: active ? `${t.color}18` : "rgba(255,255,255,0.03)",
                    boxShadow: active ? `0 0 20px ${t.glow}` : "none",
                  }}
                >
                  {t.label}
                  {t.count > 0 && (
                    <span
                      className="ml-2 rounded-full px-1.5 py-0.5"
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        background: active ? `${t.color}30` : "rgba(255,255,255,0.08)",
                        color: active ? t.color : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {t.count}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Rides grid / aquarium feature */}
        <div className="mt-10 xl:grid xl:grid-cols-[1fr_320px] xl:gap-6">
          {/* Ride cards — snap scroll on mobile, grid on desktop */}
          <style>{`
            .rides-grid {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              gap: 12px;
              padding-bottom: 16px;
              scrollbar-width: none;
            }
            .rides-grid::-webkit-scrollbar { display: none; }
            .ride-card {
              scroll-snap-align: start;
              min-width: 78vw;
              flex-shrink: 0;
            }
            @media (min-width: 768px) {
              .rides-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                overflow-x: visible;
                gap: 16px;
              }
              .ride-card { min-width: unset; }
            }
            @media (min-width: 1280px) {
              .rides-grid { grid-template-columns: repeat(3, 1fr); }
            }
          `}</style>

          {activeTab === "aquarium" ? (
            /* Fish Aquarium featured card */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(27,184,232,0.07)",
                border: "1px solid rgba(27,184,232,0.25)",
                boxShadow: "0 8px 40px rgba(27,184,232,0.12)",
              }}
            >
              <div className="p-8 md:p-12">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
                  style={{
                    background: "rgba(27,184,232,0.15)",
                    border: "1px solid rgba(27,184,232,0.4)",
                    color: "#1BB8E8",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1BB8E8] animate-pulse" />
                  New Attraction
                </span>
                <h3
                  className="font-display font-black text-white text-balance"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
                >
                  Dive Into a World Beneath the Surface.
                </h3>
                <p
                  className="mt-5 text-white/55"
                  style={{ fontSize: "1rem", lineHeight: "1.88", fontFamily: "var(--font-sans)", maxWidth: "680px" }}
                >
                  Flora Fantasia&apos;s Fish Aquarium is one of the most unique attractions in all of Malabar.
                  Featuring a stunning collection of exotic marine life, this immersive aquatic world brings
                  families face-to-face with the ocean&apos;s most fascinating creatures. From vibrant tropical
                  fish to rare aquatic species — every corner invites wonder, curiosity, and awe.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Exotic Marine Life", "Family Experience", "All Ages", "New Attraction"].map(chip => (
                    <span
                      key={chip}
                      className="rounded-full px-4 py-2"
                      style={{
                        border: "1px solid rgba(27,184,232,0.35)",
                        color: "#1BB8E8",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-sans)",
                        background: "rgba(27,184,232,0.08)",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <a
                  href="#aquarium"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-all duration-200 hover:brightness-110"
                  style={{
                    border: "1px solid rgba(27,184,232,0.5)",
                    color: "#1BB8E8",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--font-sans)",
                    background: "rgba(27,184,232,0.08)",
                  }}
                >
                  Explore the Aquarium
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M1 6h10M7 2l4 4-4 4"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="rides-grid">
              <AnimatePresence mode="wait">
                {rides.map((ride, i) => (
                  <motion.div
                    key={`${activeTab}-${ride.name}`}
                    className="ride-card"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: smoothEase }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(ride)}
                      className="group relative w-full overflow-hidden text-left transition-all duration-250 hover:-translate-y-1"
                      style={{
                        background: "rgba(255,255,255,0.035)",
                        border: `1px solid rgba(255,255,255,0.07)`,
                        borderTop: `3px solid ${tab.color}`,
                        borderRadius: "18px",
                        padding: "20px 16px",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = `rgba(212,120,10,0.5)`;
                        el.style.borderTopColor = tab.color;
                        el.style.boxShadow = `0 8px 32px rgba(212,120,10,0.15)`;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(255,255,255,0.07)";
                        el.style.borderTopColor = tab.color;
                        el.style.boxShadow = "none";
                      }}
                    >
                      <h3
                        className="font-display font-bold text-white"
                        style={{ fontSize: "15px", letterSpacing: "-0.01em", marginBottom: "6px" }}
                      >
                        {ride.name}
                      </h3>
                      <p
                        className="text-white/45"
                        style={{
                          fontSize: "12px",
                          lineHeight: "1.6",
                          fontFamily: "var(--font-sans)",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}
                      >
                        {ride.desc}
                      </p>
                      <div
                        className="mt-3 flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ color: tab.color, fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                      >
                        Details
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M1 5h8M5 1l4 4-4 4"/>
                        </svg>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Sidebar — hidden on mobile */}
          {activeTab !== "aquarium" && (
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="attractions-sidebar hidden xl:block rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="uppercase"
                style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", color: "#1BB8E8", fontFamily: "var(--font-sans)" }}
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
              <div className="mt-8 flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-1" style={{ scrollbarWidth: "none" }}>
                {rides.map((ride) => (
                  <button
                    key={`${ride.name}-list`}
                    type="button"
                    onClick={() => setSelected(ride)}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${tab.color}44`; e.currentTarget.style.background = `${tab.color}0D`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: tab.color }} />
                    <span
                      className="font-medium text-white/70 transition-colors group-hover:text-white"
                      style={{ fontSize: "0.88rem", fontFamily: "var(--font-sans)" }}
                    >
                      {ride.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.aside>
          )}
        </div>
      </div>

      {/* Ride detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-10 backdrop-blur-2xl"
            style={{ background: "rgba(11,24,34,0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
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
                      className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] border"
                      style={{
                        background: `${tab.color}18`,
                        borderColor: `${tab.color}44`,
                        color: tab.color,
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {tab.label}
                    </span>
                    <h3
                      className="mt-3 font-display font-black text-white"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
                    >
                      {selected.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
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
                  {selected.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#booking"
                    onClick={() => setSelected(null)}
                    className="rounded-full px-7 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
                    style={{ background: "#D4780A", fontFamily: "var(--font-sans)", boxShadow: "0 6px 20px rgba(212,120,10,0.35)" }}
                  >
                    Book Tickets
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-full px-7 py-3 text-[14px] font-semibold text-white/70 transition hover:text-white"
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
