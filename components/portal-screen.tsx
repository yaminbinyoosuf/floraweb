"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LiquidButton } from "@/components/ui";
import { smoothEase, springGentle } from "@/lib/motion";

export function PortalScreen({
  open,
  onEnter,
}: {
  open: boolean;
  onEnter: () => void;
}) {
  return (
    <AnimatePresence>
      {!open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(18px)" }}
          transition={{ duration: 1.1, ease: smoothEase }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.14, opacity: 0 }}
            transition={{ duration: 1.6, ease: smoothEase }}
          >
            <Image
              src="/drone-opening.jpeg"
              alt="Drone view of Flora Fantasia"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,7,13,0.18),rgba(0,0,0,0.76)_72%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.72))]" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: 26, scale: 0.96, filter: "blur(12px)" },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  delayChildren: 0.12,
                  staggerChildren: 0.08,
                  ...springGentle,
                },
              },
              exit: {
                opacity: 0,
                y: -10,
                scale: 1.08,
                filter: "blur(18px)",
                transition: { duration: 0.85, ease: smoothEase },
              },
            }}
            className="relative flex max-w-xl flex-col items-center text-center"
          >
            <motion.div
              className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 rounded-full aurora-ring opacity-70 blur-3xl"
              animate={{ scale: [0.94, 1.04, 0.98], opacity: [0.5, 0.76, 0.58] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="eyebrow relative z-10"
            >
              Kerala, India
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="headline-xl relative z-10 mt-6 text-white"
            >
              Flora Fantasia
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className="relative z-10 mt-6 max-w-md text-base leading-8 text-white/82 [text-shadow:0_10px_30px_rgba(0,0,0,0.34)]"
            >
              Step through a cinematic portal into water, thrill, and family zones
              crafted as one continuous digital park journey.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}>
              <LiquidButton onClick={onEnter} className="relative z-10 mt-10">
                Enter the Park
              </LiquidButton>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
