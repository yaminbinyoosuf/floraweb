"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { zones } from "@/lib/data";

const zoneConfig = [
  {
    id: "water-world",
    num: "01",
    accent: "#1BB8E8",
    bg: "radial-gradient(ellipse at 20% 40%, rgba(27,184,232,0.22) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(27,184,232,0.12) 0%, transparent 50%), #0B1822",
    pillClass: "border-[rgba(27,184,232,0.45)] text-[#1BB8E8] bg-[rgba(27,184,232,0.12)]",
    numColor: "#1BB8E8",
  },
  {
    id: "thrill-zone",
    num: "02",
    accent: "#D4780A",
    bg: "radial-gradient(ellipse at 20% 40%, rgba(212,120,10,0.24) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(212,120,10,0.14) 0%, transparent 50%), #0B1822",
    pillClass: "border-[rgba(212,120,10,0.45)] text-[#F5A623] bg-[rgba(212,120,10,0.12)]",
    numColor: "#D4780A",
  },
  {
    id: "family-zone",
    num: "03",
    accent: "#F5C842",
    bg: "radial-gradient(ellipse at 20% 40%, rgba(245,200,66,0.20) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(212,120,10,0.12) 0%, transparent 50%), #0B1822",
    pillClass: "border-[rgba(245,200,66,0.45)] text-[#F5C842] bg-[rgba(245,200,66,0.12)]",
    numColor: "#F5C842",
  },
];

// Mobile: accordion cards (unchanged)
function MobileZoneCard({
  zone,
  cfg,
}: {
  zone: (typeof zones)[0];
  cfg: (typeof zoneConfig)[0];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        background: "#0B1822",
        border: `1px solid ${cfg.accent}33`,
        borderLeft: `3px solid ${cfg.accent}`,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between p-6 text-left"
        style={{ background: "transparent" }}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-display font-black leading-none"
            style={{ fontSize: "2rem", color: cfg.accent, opacity: 0.7, letterSpacing: "-0.04em" }}
          >
            {cfg.num}
          </span>
          <div>
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] ${cfg.pillClass}`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {zone.label}
            </span>
            <p
              className="mt-2 font-display font-bold text-white text-balance"
              style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
            >
              {zone.momentTitle}
            </p>
          </div>
        </div>
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300"
          style={{
            border: `1px solid ${cfg.accent}44`,
            background: `${cfg.accent}18`,
            color: cfg.accent,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            fontSize: "18px",
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="px-6 pb-6">
          <p
            className="font-display font-black text-white text-balance"
            style={{ fontSize: "clamp(1.1rem, 4vw, 1.4rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            {zone.title}
          </p>
          <p
            className="mt-4 text-white/55"
            style={{ fontSize: "0.95rem", lineHeight: "1.82", fontFamily: "var(--font-sans)" }}
          >
            {zone.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {zone.stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full px-4 py-2"
                style={{
                  border: `1px solid ${cfg.accent}44`,
                  background: `${cfg.accent}18`,
                  color: cfg.accent,
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScenicStory() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Keyboard arrow navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((v) => Math.min(v + 1, zones.length - 1));
      if (e.key === "ArrowLeft")  setActive((v) => Math.max(v - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const zone = zones[active];
  const cfg  = zoneConfig[active];

  // ── Mobile ──────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section id="zones" className="relative" style={{ background: "#0B1822" }}>
        <div className="flex flex-col gap-4 px-4 py-12">
          <p
            className="mb-2 text-center uppercase text-white/30"
            style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.3em", fontFamily: "var(--font-sans)" }}
          >
            Park Zones
          </p>
          {zones.map((z, i) => (
            <MobileZoneCard key={z.id} zone={z} cfg={zoneConfig[i]} />
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop: click-driven navigator ─────────────────────────────────
  return (
    <section
      id="zones"
      className="relative overflow-hidden noise"
      style={{ minHeight: "min(92vh, 780px)", transition: "background 0.6s ease", background: cfg.bg }}
    >
      {/* Watermark number */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`num-${active}`}
          className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 select-none font-display font-black leading-none"
          style={{ fontSize: "clamp(10rem, 24vw, 22rem)", color: "rgba(255,255,255,0.022)", letterSpacing: "-0.06em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {cfg.num}
        </motion.span>
      </AnimatePresence>

      {/* ── Zone tab bar ── */}
      <div className="absolute inset-x-0 top-6 z-20 flex justify-center px-6">
        <div
          className="flex items-center gap-1 rounded-full p-1 backdrop-blur-xl"
          style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.05)" }}
        >
          {zones.map((z, i) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setActive(i)}
              className="relative rounded-full px-5 py-2 transition-all duration-300"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                color: i === active ? zoneConfig[i].accent : "rgba(255,255,255,0.4)",
                background: i === active ? `${zoneConfig[i].accent}18` : "transparent",
                border: i === active ? `1px solid ${zoneConfig[i].accent}44` : "1px solid transparent",
              }}
            >
              <span className="mr-2 opacity-50">{zoneConfig[i].num}</span>
              {z.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Zone content panel ── */}
      <div className="shell relative z-10 flex items-center" style={{ minHeight: "min(92vh, 780px)" }}>
        <AnimatePresence mode="wait">
          <motion.article
            key={active}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full pt-24 pb-20"
          >
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left — text */}
              <div className="max-w-3xl">
                <p className="mb-5 flex items-center gap-4">
                  <span
                    className="font-display font-black leading-none"
                    style={{ fontSize: "3.5rem", color: cfg.numColor, opacity: 0.65, letterSpacing: "-0.04em" }}
                  >
                    {cfg.num}
                  </span>
                  <span
                    className="text-white/35"
                    style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                  >
                    Park Zone
                  </span>
                </p>

                <div className="mb-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] ${cfg.pillClass}`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {zone.label}
                  </span>
                </div>

                <h2
                  className="font-display font-black text-white text-balance"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
                >
                  {zone.title}
                </h2>

                <p
                  className="mt-6 max-w-2xl text-white/55"
                  style={{ fontSize: "1.04rem", lineHeight: "1.88", fontFamily: "var(--font-sans)" }}
                >
                  {zone.description}
                </p>

                {/* Stat chips */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {zone.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full px-5 py-2.5 backdrop-blur-sm"
                      style={{
                        border: `1px solid ${cfg.accent}44`,
                        background: `${cfg.accent}18`,
                        color: cfg.accent,
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* ── Prev / Next arrows ── */}
                <div className="mt-10 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActive((v) => Math.max(v - 1, 0))}
                    disabled={active === 0}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 disabled:opacity-25"
                    style={{
                      border: `1px solid ${cfg.accent}55`,
                      background: `${cfg.accent}12`,
                      color: cfg.accent,
                    }}
                    aria-label="Previous zone"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M10 3L5 8l5 5" />
                    </svg>
                  </button>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-2">
                    {zones.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActive(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width:  i === active ? "24px" : "8px",
                          height: "8px",
                          background: i === active ? cfg.accent : "rgba(255,255,255,0.22)",
                        }}
                        aria-label={`Zone ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive((v) => Math.min(v + 1, zones.length - 1))}
                    disabled={active === zones.length - 1}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 disabled:opacity-25"
                    style={{
                      border: `1px solid ${cfg.accent}55`,
                      background: `${cfg.accent}12`,
                      color: cfg.accent,
                    }}
                    aria-label="Next zone"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M6 3l5 5-5 5" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right — info card */}
              <div className="flex flex-col gap-5">
                <div
                  className="zone-card p-7"
                  style={{ borderColor: `${cfg.accent}22` }}
                >
                  <p
                    className="mb-3 uppercase"
                    style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", color: cfg.accent, fontFamily: "var(--font-sans)" }}
                  >
                    Zone Experience
                  </p>
                  <p
                    className="font-medium text-white/80"
                    style={{ fontSize: "1.04rem", lineHeight: "1.78", fontFamily: "var(--font-sans)" }}
                  >
                    {zone.storyLead}
                  </p>
                </div>

                <div className="zone-card hidden p-7 lg:block" style={{ borderColor: `${cfg.accent}22` }}>
                  <p
                    className="uppercase"
                    style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", color: "#D4780A", fontFamily: "var(--font-sans)" }}
                  >
                    Zone Rhythm
                  </p>
                  <h3
                    className="mt-4 font-display font-black text-white/90 text-balance"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                  >
                    Moving through the park should feel like changing scenes, not reading stacked sections.
                  </h3>
                  <p
                    className="mt-5 text-white/50"
                    style={{ fontSize: "0.93rem", lineHeight: "1.82", fontFamily: "var(--font-sans)" }}
                  >
                    Water shifts to thrill, thrill softens into family space. The park story flows instead of stacking into hard boxes.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,120,10,0.6), rgba(27,184,232,0.6), transparent)" }}
      />
    </section>
  );
}
