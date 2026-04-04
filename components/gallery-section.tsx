"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { galleryItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { smoothEase } from "@/lib/motion";

export function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallax = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 80,
    damping: 22,
    mass: 0.9,
  });

  return (
    <section id="gallery" ref={sectionRef} className="section-padding relative">
      <motion.div
        className="absolute inset-x-0 top-20 h-64 bg-cyan-400/10 blur-3xl"
        style={{ y: parallax }}
        aria-hidden
      />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments cut like stills from a moving park film."
          text="A cinematic mosaic of splash zones, ride silhouettes, and park atmosphere that sharpens as you scroll."
          align="center"
        />

        <div className="mt-12 grid auto-rows-[240px] gap-5 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.035, ease: smoothEase }}
              className={`glass-panel premium-border group relative overflow-hidden rounded-[1.8rem] ${item.span}`}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.1, ease: smoothEase }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(9,17,28,0.56)_100%)]" />
              <motion.figcaption
                initial={{ opacity: 0.72, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothEase }}
                className="absolute bottom-0 left-0 right-0 p-5 text-[11px] uppercase tracking-[0.24em] text-white/88"
              >
                {item.title}
              </motion.figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
