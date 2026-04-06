"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { HERO_IMAGE, WHATSAPP_LINK, parkStats } from "@/lib/data";
import { smoothEase, springGentle } from "@/lib/motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: smoothEase } },
};

export function HeroSection({ onExplore }: { onExplore: () => void }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 60]), springGentle);
  const bgY      = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), springGentle);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);

  // Desktop-only parallax on scroll
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      if (window.innerWidth <= 768) return;
      const offset = window.pageYOffset * 0.25;
      el.style.transform = `scale(1.08) translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Full-bleed background image ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{ transform: "scale(1.08)", transformOrigin: "center center" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Flora Fantasia Amusement Park aerial view"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "brightness(0.28)" }}
          />
        </div>
      </motion.div>

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(11,24,34,0.55) 0%, rgba(11,24,34,0.82) 55%, #0B1822 100%)",
        }}
      />

      {/* ── Radial glow blobs ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(212,120,10,0.14) 0%, transparent 60%), " +
            "radial-gradient(circle at 80% 30%, rgba(27,184,232,0.09) 0%, transparent 55%)",
        }}
      />

      {/* ── Top gradient for nav readability ── */}
      <div
        className="absolute inset-x-0 top-0 h-40 z-[3] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
      />

      {/* ── Bottom fade ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-[3] pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B1822 0%, transparent 100%)" }}
      />

      {/* ── Content ── */}
      <motion.div
        className="shell relative z-10 flex min-h-screen flex-col justify-start pt-20 pb-16 md:pt-36 md:pb-20 md:justify-center"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full md:max-w-2xl"
        >
          {/* Badges row */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm"
              style={{
                border: "1px solid rgba(27,184,232,0.45)",
                color: "#1BB8E8",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1BB8E8] animate-pulse flex-shrink-0" />
              Kerala, India · Malappuram
            </span>

            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm"
              style={{
                background: "rgba(212,120,10,0.18)",
                border: "1px solid rgba(212,120,10,0.4)",
                color: "#F5A623",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
              }}
            >
              Open Daily · 11 AM – 6 PM
            </span>
          </motion.div>

          {/* Giant headline */}
          <motion.div variants={fadeUp} className="mt-4 md:mt-7">
            <h1
              className="font-display font-black uppercase"
              style={{
                fontSize: "clamp(2.8rem, 12vw, 9rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="text-white">MALABAR&apos;S</span>
              <br />
              <span className="text-white">OWN</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #D4780A, #F5A623)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AMUSEMENT PARK
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/85"
            style={{
              fontSize: "clamp(1rem, 3.5vw, 1.35rem)",
              fontWeight: 400,
              fontFamily: "var(--font-sans)",
              lineHeight: 1.5,
            }}
          >
            Unleash Your Inner Child!
          </motion.p>

          {/* Body — single line on mobile */}
          <motion.p
            variants={fadeUp}
            className="mt-2 text-white/55 line-clamp-1 md:line-clamp-none"
            style={{
              fontSize: "clamp(0.88rem, 2.5vw, 1rem)",
              lineHeight: "1.75",
              fontFamily: "var(--font-sans)",
            }}
          >
            Kerala&apos;s most spectacular family adventure park — water thrills, thrill rides, aquarium wonders, and unforgettable memories.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
              style={{
                background: "#D4780A",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                fontFamily: "var(--font-sans)",
                boxShadow: "0 6px 28px rgba(212,120,10,0.5)",
              }}
            >
              Book Tickets Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M2 7h10M7 2l5 5-5 5"/>
              </svg>
            </a>
            <button
              type="button"
              onClick={onExplore}
              className="flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-all duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.35)",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Explore ↓
            </button>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: smoothEase }}
          className="mt-10 md:mt-20 grid grid-cols-4 gap-x-4 gap-y-5 border-t pt-7 md:pt-10 md:gap-x-10"
          style={{ borderColor: "rgba(255,255,255,0.08)", maxWidth: "680px" }}
        >
          {parkStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="font-display font-black"
                style={{
                  fontSize: "clamp(1.4rem, 6vw, 3.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #D4780A, #F5A623)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span
                className="mt-1 uppercase text-white/50"
                style={{ fontSize: "clamp(7px, 1.8vw, 10px)", letterSpacing: "0.12em", fontFamily: "var(--font-sans)", fontWeight: 500 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden md:flex"
      >
        <span
          className="text-white/30 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.36em", fontFamily: "var(--font-sans)", fontWeight: 500 }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px"
          style={{ background: "linear-gradient(180deg, rgba(212,120,10,0.7), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
