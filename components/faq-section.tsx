"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { smoothEase } from "@/lib/motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#FFF8F0" }}
    >
      {/* Subtle ambient */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,120,10,0.08), transparent 60%)" }}
      />

      <div className="shell">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything visitors ask before the day begins."
          text="A quick reference for timings, tickets, safety, lockers, payments, and entry guidance."
          variant="light"
        />

        <div className="mt-14 max-w-4xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: smoothEase }}
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-white transition-all duration-300"
                  style={{
                    boxShadow: isOpen
                      ? "0 4px 24px rgba(212,120,10,0.12), 0 1px 4px rgba(0,0,0,0.06)"
                      : "0 1px 8px rgba(0,0,0,0.06)",
                    border: isOpen
                      ? "1px solid rgba(212,120,10,0.25)"
                      : "1px solid rgba(11,24,34,0.08)",
                  }}
                >
                  {/* Left orange accent bar when open */}
                  <div
                    className="absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-all duration-300"
                    style={{ background: "#D4780A", opacity: isOpen ? 1 : 0 }}
                  />

                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="flex-shrink-0 font-display font-black"
                        style={{ fontSize: "clamp(14px, 4vw, 20px)", color: isOpen ? "#D4780A" : "rgba(11,24,34,0.2)", letterSpacing: "-0.02em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-display font-bold text-balance transition-colors duration-200"
                        style={{
                          fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                          lineHeight: 1.4,
                          letterSpacing: "-0.015em",
                          color: isOpen ? "#0B1822" : "rgba(11,24,34,0.8)",
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.24, ease: smoothEase }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        border: isOpen ? "1px solid rgba(212,120,10,0.4)" : "1px solid rgba(11,24,34,0.15)",
                        background: isOpen ? "rgba(212,120,10,0.1)" : "transparent",
                        color: isOpen ? "#D4780A" : "rgba(11,24,34,0.4)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M6 1.5v9M1.5 6h9" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: smoothEase }}
                        className="overflow-hidden"
                      >
                        <p
                          className="px-7 pb-6 pl-20"
                          style={{
                            fontSize: "0.97rem",
                            lineHeight: "1.88",
                            color: "rgba(11,24,34,0.62)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
