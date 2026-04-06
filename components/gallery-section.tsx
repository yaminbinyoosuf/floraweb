"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { smoothEase } from "@/lib/motion";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden"
      style={{ background: "#FFF8F0" }}
    >
      <div className="shell relative">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments cut like stills from a moving park film."
          text="A cinematic mosaic of splash zones, ride silhouettes, and park atmosphere."
          align="center"
          variant="light"
        />

        {/* Masonry grid using CSS columns */}
        <style>{`
          #gallery-masonry { columns: 1; column-gap: 1rem; }
          @media (min-width: 640px) { #gallery-masonry { columns: 2; } }
          @media (min-width: 1024px) { #gallery-masonry { columns: 3; } }
        `}</style>
        <div className="mt-14">
          <div id="gallery-masonry">
            {galleryItems.map((item, index) => (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.04, ease: smoothEase }}
                className="group relative mb-4 cursor-pointer overflow-hidden break-inside-avoid rounded-xl"
                style={{ border: "1px solid rgba(11,24,34,0.08)" }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={index % 3 === 0 ? 500 : 380}
                    className="w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    style={{ display: "block" }}
                  />
                  {/* Orange border glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 rounded-xl pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 2px rgba(212,120,10,0.5)" }}
                  />
                  {/* Caption overlay */}
                  <figcaption
                    className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 p-5 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(0deg, rgba(11,24,34,0.9) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      className="text-white"
                      style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                    >
                      {item.title}
                    </span>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
