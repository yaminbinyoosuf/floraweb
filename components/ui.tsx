"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";
import { smoothEase } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85, ease: smoothEase }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="headline-lg mt-5 text-[var(--text-100)] text-balance">{title}</h2>
      {text ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-300)] md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function LiquidButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const shared =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-transform duration-300 will-change-transform";

  const palette =
    variant === "primary"
      ? "bg-[linear-gradient(180deg,#111821_0%,#1c2a39_100%)] text-white shadow-[0_18px_36px_rgba(15,23,34,0.16)]"
      : "border border-[rgba(16,24,32,0.08)] bg-white/82 text-[var(--text-100)] shadow-[0_10px_24px_rgba(15,23,34,0.05)] backdrop-blur-xl";

  const body = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 translate-y-full rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] transition duration-500 ease-out group-hover:translate-y-0"
      />
      <span
        aria-hidden
        className="absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/35 opacity-0 blur-md transition duration-700 group-hover:left-[120%] group-hover:opacity-100"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        whileHover={{ y: -3, scale: 1.012 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className={`${shared} ${palette} ${className}`}
        data-ripple
      >
        {body}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -3, scale: 1.012 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.55, ease: smoothEase }}
      className={`${shared} ${palette} ${className}`}
      onClick={onClick}
      data-ripple
    >
      {body}
    </motion.button>
  );
}

export function WaveDivider({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path
          d="M0 112L40 106.7C80 101 160 91 240 90.7C320 91 400 101 480 96C560 91 640 69 720 64C800 59 880 69 960 85.3C1040 101 1120 123 1200 128C1280 133 1360 123 1400 117.3L1440 112V160H1400C1360 160 1280 160 1200 160C1120 160 1040 160 960 160C880 160 800 160 720 160C640 160 560 160 480 160C400 160 320 160 240 160C160 160 80 160 40 160H0Z"
          fill="rgba(255,255,255,0.08)"
        />
      </svg>
    </div>
  );
}

export function StatPill({
  children,
  className = "",
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-full border border-[rgba(16,24,32,0.08)] bg-white/82 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--text-300)] shadow-[0_8px_20px_rgba(15,23,34,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
