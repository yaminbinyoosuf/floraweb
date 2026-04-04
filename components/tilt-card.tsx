"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";

type TiltCardProps = PropsWithChildren<{
  className?: string;
  glare?: string;
  maxTilt?: number;
}>;

export function TiltCard({
  children,
  className = "",
  glare = "rgba(89, 208, 255, 0.22)",
  maxTilt = 10,
}: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(rotateX, { stiffness: 170, damping: 18, mass: 0.8 });
  const smoothY = useSpring(rotateY, { stiffness: 170, damping: 18, mass: 0.8 });

  const glow = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, ${glare}, transparent 36%)`;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    const rX = ((py - 50) / 50) * -maxTilt;
    const rY = ((px - 50) / 50) * maxTilt;

    rotateX.set(rX);
    rotateY.set(rY);
    mouseX.set(px);
    mouseY.set(py);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.div
      className={`group relative transform-gpu preserve-3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: smoothX, rotateY: smoothY }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ backgroundImage: glow }}
      />
      {children}
    </motion.div>
  );
}
