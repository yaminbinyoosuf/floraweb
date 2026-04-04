"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { AtmosphereCanvas } from "@/components/atmosphere-canvas";
import { LiquidButton, StatPill } from "@/components/ui";
import { HERO_IMAGE, WHATSAPP_LINK } from "@/lib/data";
import { smoothEase, springGentle } from "@/lib/motion";

export function HeroSection({ onExplore }: { onExplore: () => void }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), springGentle);
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 60]), springGentle);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.55]);
  const glowLeftY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0 scale-[1.04]" style={{ y: imageY }}>
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: [1, 1.08, 1.02] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Aerial view of Flora Fantasia Amusement Park"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="video-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,28,0.44)_8%,rgba(9,17,28,0.08)_52%,rgba(9,17,28,0.34)_100%)]" />
      </motion.div>

      <div className="absolute inset-0">
        <AtmosphereCanvas />
        <motion.div
          className="absolute left-[10%] top-[16%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 16, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          style={{ y: glowLeftY }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] h-64 w-64 rounded-full bg-orange-400/10 blur-3xl"
          animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          style={{ y: glowRightY }}
        />
      </div>

      <motion.div
        className="shell relative flex min-h-screen items-end pb-16 pt-28 md:items-center md:pb-24"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid w-full items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            className="max-w-4xl"
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } } }} className="eyebrow">
              Immersive Park Arrival
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: smoothEase } } }} className="mt-6 text-[11px] uppercase tracking-[0.28em] text-white/80 [text-shadow:0_8px_24px_rgba(0,0,0,0.24)] md:text-sm">
              The Sound of Grandeur. A Park of Pride.
            </motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: smoothEase } } }} className="headline-xl mt-6 text-white text-balance [text-shadow:0_18px_46px_rgba(0,0,0,0.28)]">
              Malabar’s Own Amusement Park
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: smoothEase } } }} className="mt-6 max-w-2xl text-lg leading-8 text-white/90 [text-shadow:0_10px_30px_rgba(0,0,0,0.24)] md:text-[1.35rem]">
              An unforgettable trip experience — where fun comes alive.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: smoothEase } } }} className="mt-10 flex flex-wrap gap-4">
              <LiquidButton href={WHATSAPP_LINK}>Book via WhatsApp</LiquidButton>
              <LiquidButton onClick={onExplore} variant="secondary">
                Explore the Park
              </LiquidButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28, ease: smoothEase }}
            className="zone-card premium-border rounded-[2.2rem] p-6 md:p-8"
            whileHover={{ y: -6 }}
          >
            <p className="text-xs uppercase tracking-[0.36em] text-[var(--text-500)]">
              Today’s Park Mood
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <StatPill>13 Years Strong</StatPill>
              <StatPill>Water Trails</StatPill>
              <StatPill>Pulse Rides</StatPill>
              <StatPill>Family Loops</StatPill>
            </div>
            <p className="mt-8 text-[15px] leading-7 text-[var(--text-300)]">
              Scroll through a park story shaped by water thrills, family memories,
              visitor trust, and one of Kerala’s most loved leisure destinations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
