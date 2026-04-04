"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export function RippleSurface() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-ripple]")) {
        return;
      }

      const ripple = {
        id: window.performance.now(),
        x: event.clientX,
        y: event.clientY,
      };

      setRipples((current) => [...current, ripple]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== ripple.id));
      }, 900);
    };

    window.addEventListener("pointerdown", handlePointer);
    return () => window.removeEventListener("pointerdown", handlePointer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute h-4 w-4 rounded-full border border-cyan-300/60 bg-cyan-300/10"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ opacity: 0.7, scale: 0.2, x: "-50%", y: "-50%" }}
            animate={{ opacity: 0, scale: 18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
