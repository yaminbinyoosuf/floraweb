"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function PortalScreen({ open, onEnter }: { open: boolean; onEnter: () => void }) {
  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#0B1822] px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.15, opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/drone-opening.jpeg"
              alt="Aerial view of Flora Fantasia"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[0.30]"
            />
            <div className="absolute inset-0 bg-[#0B1822]/50" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,#0B1822_0%,transparent_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(212,120,10,0.18)_0%,transparent_100%)]" />
          </motion.div>

          {/* Dot grid overlay */}
          <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              exit:  { transition: { staggerChildren: 0.05 } },
            }}
            className="relative flex max-w-2xl flex-col items-center text-center"
          >
            {/* Ambient glow */}
            <motion.div
              className="absolute inset-x-0 top-1/2 h-80 -translate-y-1/2 rounded-full opacity-50 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,120,10,0.45) 0%, rgba(27,184,232,0.25) 50%, transparent 70%)",
              }}
              animate={{ scale: [0.9, 1.08, 0.96], opacity: [0.4, 0.65, 0.45] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Kerala badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                exit:  { opacity: 0, y: -8 },
              }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 backdrop-blur-sm"
                style={{
                  border: "1px solid rgba(27,184,232,0.5)",
                  color: "#1BB8E8",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#1BB8E8] animate-pulse" />
                Kerala, India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                exit:  { opacity: 0, y: -16 },
              }}
              className="relative z-10 mt-6 font-display font-black text-white uppercase"
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", lineHeight: 0.88, letterSpacing: "-0.03em" }}
            >
              FLORA
              <br />
              <span className="text-gradient-orange">FANTASIA</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                exit:  { opacity: 0 },
              }}
              className="relative z-10 mt-7 max-w-md text-white/60"
              style={{ fontSize: "1.05rem", lineHeight: 1.8, fontFamily: "var(--font-sans)" }}
            >
              Step through a cinematic portal into water, thrill, and family zones
              crafted as one continuous digital park journey.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                exit:  { opacity: 0 },
              }}
              className="relative z-10 mt-10"
            >
              <button
                type="button"
                onClick={onEnter}
                className="group flex items-center gap-3 rounded-full px-6 sm:px-10 py-4 text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-1 active:scale-[0.98]"
                style={{
                  background: "#D4780A",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-sans)",
                  boxShadow: "0 8px 32px rgba(212,120,10,0.45)",
                }}
              >
                Enter the Park
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
