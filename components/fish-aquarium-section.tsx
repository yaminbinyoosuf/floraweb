"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

export function FishAquariumSection() {
  return (
    <section
      id="aquarium"
      className="relative overflow-hidden"
      style={{ background: "#061820", padding: "clamp(56px, 8vw, 80px) clamp(24px, 4vw, 32px)" }}
    >
      {/* Animated background blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 60%, rgba(27,184,232,0.10) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 90% 20%, rgba(13,61,74,0.40) 0%, transparent 50%)",
        }}
      />

      {/* Bubble particles */}
      <style>{`
        .aq-bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(27,184,232,0.06);
          border: 1px solid rgba(27,184,232,0.10);
          animation: aq-bubble-rise linear infinite;
          pointer-events: none;
        }
        @keyframes aq-bubble-rise {
          0%   { transform: translateY(100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 0.4; }
          100% { transform: translateY(-200px); opacity: 0; }
        }
        .aq-img-wrap {
          position: relative;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #1BB8E8, #0D3D4A, #1BB8E8);
          background-size: 300% 300%;
          animation: aq-gradient-shift 4s ease infinite;
        }
        .aq-img-wrap img {
          border-radius: 22px;
          width: 100%;
          display: block;
          object-fit: cover;
        }
        @keyframes aq-gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Bubbles */}
      {[
        { size: 8,  left: "8%",  dur: 10, delay: 0 },
        { size: 12, left: "18%", dur: 13, delay: 1.2 },
        { size: 10, left: "32%", dur: 8,  delay: 2.4 },
        { size: 16, left: "45%", dur: 15, delay: 3.6 },
        { size: 8,  left: "58%", dur: 11, delay: 4.8 },
        { size: 14, left: "70%", dur: 9,  delay: 6.0 },
        { size: 10, left: "80%", dur: 14, delay: 7.2 },
        { size: 12, left: "90%", dur: 12, delay: 8.4 },
      ].map((b, i) => (
        <div
          key={i}
          className="aq-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: 0,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
              style={{
                background: "rgba(27,184,232,0.12)",
                border: "1px solid rgba(27,184,232,0.4)",
                color: "#1BB8E8",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1BB8E8] animate-pulse flex-shrink-0" />
              New Attraction
            </span>

            {/* Eyebrow */}
            <p
              className="mb-3"
              style={{ color: "#1BB8E8", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", fontFamily: "var(--font-sans)", textTransform: "uppercase" }}
            >
              Fish Aquarium
            </p>

            {/* Headline */}
            <h2
              className="font-display font-black text-white text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
            >
              Dive Into a World Beneath the Surface.
            </h2>

            {/* Body */}
            <p
              className="mt-6 text-white/55"
              style={{ fontSize: "1rem", lineHeight: "1.88", fontFamily: "var(--font-sans)" }}
            >
              Flora Fantasia&apos;s Fish Aquarium is one of the most unique attractions in all of Malabar.
              Featuring a stunning collection of exotic marine life, this immersive aquatic world brings
              families face-to-face with the ocean&apos;s most fascinating creatures. From vibrant tropical
              fish to rare aquatic species — every corner invites wonder, curiosity, and awe.
            </p>

            {/* Feature chips */}
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

            {/* CTA */}
            <a
              href="#booking"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
              style={{
                border: "1px solid rgba(27,184,232,0.5)",
                color: "#1BB8E8",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                background: "rgba(27,184,232,0.1)",
              }}
            >
              Explore the Aquarium
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 6h10M7 2l4 4-4 4"/>
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — Image with animated gradient border */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="relative"
          >
            <div className="aq-img-wrap">
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: "22px" }}>
                <Image
                  src="/gallery-real/aquarium-kids.jpeg"
                  alt="Children at Flora Fantasia Fish Aquarium Malappuram Kerala"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Teal overlay tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "rgba(27,184,232,0.06)", mixBlendMode: "screen" }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 hidden md:block"
              style={{
                background: "rgba(6,24,32,0.92)",
                border: "1px solid rgba(27,184,232,0.35)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <p
                style={{ color: "#1BB8E8", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
              >
                Malabar&apos;s Best
              </p>
              <p
                className="mt-1 font-display font-black text-white"
                style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
              >
                Fish Aquarium
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
