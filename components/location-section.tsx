"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { DIRECTIONS_LINK, parkHours } from "@/lib/data";
import { smoothEase } from "@/lib/motion";

// Map JS getDay() (0=Sun) to park hours day index
const DAY_MAP: Record<number, string> = {
  0: "Sunday (Easter)", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday",
};

const infoCards = [
  {
    color: "#1BB8E8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path d="M9 1C5.686 1 3 3.686 3 7c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z"/>
      </svg>
    ),
    title: "Our Location",
    text: "Flora Fantasia Amusement Park, Vengad - Puramannur Road, Kizhmuri, Vengad, Kerala, India.",
  },
  {
    color: "#F5C842",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="16" height="12" rx="2"/><path d="M1 7h16"/>
      </svg>
    ),
    title: "Payments",
    text: "Cash, credit cards, Google Pay, Apple Pay, and other UPI methods are accepted at the park.",
  },
  {
    color: "#22c55e",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1l2 6h6l-5 3.6 2 6L9 13l-5 3.6 2-6L1 7h6z"/>
      </svg>
    ),
    title: "Safety First",
    text: "Minimum height rules for some rides, family-friendly supervision, and safety-focused operation.",
  },
  {
    color: "#D4780A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="12" height="10" rx="2"/><path d="M6 6V5a3 3 0 016 0v1"/>
      </svg>
    ),
    title: "Amenities",
    text: "Locker facilities and changing rooms are available for guests throughout the day.",
  },
];

export function LocationSection() {
  const todayDayName = DAY_MAP[new Date().getDay()] ?? "";

  return (
    <section
      id="location"
      className="section-padding relative overflow-hidden noise"
      style={{
        background:
          "radial-gradient(ellipse at 80% 60%, rgba(27,184,232,0.08) 0%, transparent 45%), #0B1822",
      }}
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Visit Info"
          title="Plan your visit before the gates open."
          text="Everything visitors ask for most often, paired with directions and the full weekly timing schedule."
          eyebrowColor="blue"
        />

        <div className="mt-14 grid gap-12 xl:grid-cols-[1fr_1fr]">
          {/* Info + hours */}
          <div>
            {/* Bento grid — 4 cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: smoothEase }}
                  className="rounded-2xl p-5 transition hover:-translate-y-1"
                  style={{
                    background: `${card.color}12`,
                    border: `1px solid ${card.color}30`,
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}40`,
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="font-display font-bold text-white"
                    style={{ fontSize: "16px", letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-white/50"
                    style={{ fontSize: "0.84rem", lineHeight: "1.72", fontFamily: "var(--font-sans)" }}
                  >
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Park timings */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="mt-6 overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="border-b px-6 py-4"
                style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(212,120,10,0.07)" }}
              >
                <p
                  className="uppercase text-[#D4780A]"
                  style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", fontFamily: "var(--font-sans)" }}
                >
                  Park Timings
                </p>
              </div>
              <div className="px-6 py-2">
                {parkHours.map((item, idx) => {
                  const isToday = item.day === todayDayName;
                  return (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 py-3"
                    style={{
                      borderBottom: idx < parkHours.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      borderLeft: isToday ? "3px solid #D4780A" : "3px solid transparent",
                      paddingLeft: "12px",
                      marginLeft: "-12px",
                      borderRadius: isToday ? "4px" : undefined,
                    }}
                  >
                    <span
                      className="font-medium"
                      style={{ fontSize: "0.88rem", fontFamily: "var(--font-sans)", color: isToday ? "#F5A623" : "rgba(255,255,255,0.65)" }}
                    >
                      {item.day}{isToday && <span style={{ fontSize: "9px", marginLeft: "6px", opacity: 0.7, letterSpacing: "0.1em", textTransform: "uppercase" }}>Today</span>}
                    </span>
                    <span
                      className="rounded-full px-3 py-1"
                      style={{
                        border: "1px solid rgba(212,120,10,0.3)",
                        background: "rgba(212,120,10,0.10)",
                        color: "#F5A623",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Get directions button */}
            <div className="mt-8">
              <a
                href={DIRECTIONS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
                style={{
                  background: "#D4780A",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-sans)",
                  boxShadow: "0 6px 28px rgba(212,120,10,0.45)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path d="M9 1C5.686 1 3 3.686 3 7c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z"/>
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="overflow-hidden rounded-2xl p-2"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
          >
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Flora Fantasia location"
                src="https://www.google.com/maps?q=Flora%20Fantasia%20Amusement%20Park%2C%20Kerala&z=14&output=embed"
                className="h-[320px] sm:h-[420px] md:h-[540px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
