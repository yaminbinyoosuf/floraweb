"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";
import { smoothEase } from "@/lib/motion";

/* ── SECTION HEADING ────────────────────────────────────────── */
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  variant?: "dark" | "light"; /* dark = white text on navy bg, light = navy text on cream bg */
  eyebrowColor?: "orange" | "blue";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  variant = "dark",
  eyebrowColor = "orange",
}: SectionHeadingProps) {
  const centered = align === "center";
  const isLight = variant === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: smoothEase }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p
        className="inline-flex items-center gap-2 text-[11px] font-medium uppercase"
        style={{
          letterSpacing: "0.2em",
          color: eyebrowColor === "blue" ? "#1BB8E8" : "#D4780A",
          fontFamily: "var(--font-sans)",
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-balance"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          color: isLight ? "#0B1822" : "white",
        }}
      >
        {title}
      </h2>
      {text ? (
        <p
          className="mt-6 max-w-2xl"
          style={{
            fontSize: "1.04rem",
            lineHeight: "1.88",
            color: isLight ? "rgba(11,24,34,0.6)" : "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

/* ── LIQUID BUTTON ──────────────────────────────────────────── */
type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function LiquidButton({ href, onClick, children, variant = "primary", className = "" }: ButtonProps) {
  const shared =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.04em] transition-all duration-300 will-change-transform hover:brightness-110 hover:-translate-y-px active:scale-[0.98]";

  const primary =
    "text-white";

  const secondary =
    "bg-transparent text-white border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.5)] backdrop-blur-sm";

  const palette = variant === "primary" ? primary : secondary;

  const primaryStyle = variant === "primary"
    ? { background: "#D4780A", boxShadow: "0 8px 28px rgba(212,120,10,0.35)", fontFamily: "var(--font-sans)" }
    : { fontFamily: "var(--font-sans)" };

  const body = (
    <span className="relative z-10 flex items-center gap-2.5">{children}</span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: smoothEase }}
        className={`${shared} ${palette} ${className}`}
        style={primaryStyle}
      >
        {body}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: smoothEase }}
      className={`${shared} ${palette} ${className}`}
      style={primaryStyle}
      onClick={onClick}
    >
      {body}
    </motion.button>
  );
}

/* ── WAVE DIVIDER ───────────────────────────────────────────── */
export function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div className={`wave-divider opacity-40 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path
          d="M0 112L40 106.7C80 101 160 91 240 90.7C320 91 400 101 480 96C560 91 640 69 720 64C800 59 880 69 960 85.3C1040 101 1120 123 1200 128C1280 133 1360 123 1400 117.3L1440 112V160H1400C1360 160 1280 160 1200 160C1120 160 1040 160 960 160C880 160 800 160 720 160C640 160 560 160 480 160C400 160 320 160 240 160C160 160 80 160 40 160H0Z"
          fill="rgba(212,120,10,0.15)"
        />
      </svg>
    </div>
  );
}

/* ── STAT PILL ──────────────────────────────────────────────── */
export function StatPill({ children, className = "" }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-full bg-white/08 border border-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-white/70 backdrop-blur-sm ${className}`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {children}
    </div>
  );
}
