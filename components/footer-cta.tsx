"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/data";
import { smoothEase } from "@/lib/motion";

export function FooterCta() {
  return (
    <section
      className="relative overflow-hidden py-32 noise md:py-44 footer-cta-mesh"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,120,10,0.6), rgba(27,184,232,0.4), transparent)" }}
      />

      {/* Animated orbs */}
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[18%] h-[420px] w-[420px] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(212,120,10,0.22), transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[6%] bottom-[18%] h-[340px] w-[340px] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(27,184,232,0.14), transparent 60%)" }}
        animate={{ scale: [1, 1.16, 1], opacity: [0.4, 0.72, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="shell relative">
        {/* Large decorative text */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-black uppercase leading-none select-none"
          style={{ fontSize: "clamp(3rem, 16vw, 18rem)", color: "rgba(255,255,255,0.022)", letterSpacing: "-0.06em" }}
          aria-hidden
        >
          BOOK
        </div>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: smoothEase }}
          >
            {/* Eyebrow pill */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm"
              style={{
                border: "1px solid rgba(27,184,232,0.4)",
                color: "#1BB8E8",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
              }}
            >
              Book Now
            </span>

            <h2
              className="mt-6 font-display font-black text-white text-balance"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Make your holidays unforgettable.
            </h2>

            <p
              className="mt-6 text-white/50"
              style={{ fontSize: "1.06rem", lineHeight: "1.82", fontFamily: "var(--font-sans)" }}
            >
              Flora Fantasia — Valancheri, Malappuram. Open daily 11am - 6pm.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start gap-5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}
          >
            <a
              href="#booking"
              className="flex items-center gap-2.5 rounded-full px-10 py-4 text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-1"
              style={{
                background: "#D4780A",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                fontFamily: "var(--font-sans)",
                boxShadow: "0 8px 32px rgba(212,120,10,0.45)",
              }}
            >
              Buy Tickets Online
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M2 7h10M7 2l5 5-5 5"/>
              </svg>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-white/80"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
              Instant WhatsApp confirmation · No booking fee
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
