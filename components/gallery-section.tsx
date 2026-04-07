"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { galleryItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { smoothEase } from "@/lib/motion";

// Featured items get a 2×2 slot on desktop, normal on mobile
const featuredIndexes = new Set([0, 6, 8]);

export function GallerySection() {
  const [lightbox, setLightbox] = useState<null | { src: string; title: string }>(null);

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

        <style>{`
          /* ── Grid layout ── */
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          @media (min-width: 640px) {
            .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
          }
          @media (min-width: 1024px) {
            .gallery-grid { grid-template-columns: repeat(4, 1fr); gap: 10px; }
          }
          @media (min-width: 1280px) {
            .gallery-grid { grid-template-columns: repeat(5, 1fr); }
          }

          /* Featured cards span 2×2 on ≥640px */
          .gallery-item-featured {
            grid-column: span 1;
            grid-row: span 1;
          }
          @media (min-width: 640px) {
            .gallery-item-featured {
              grid-column: span 2;
              grid-row: span 2;
            }
          }

          /* All items square */
          .gallery-thumb {
            position: relative;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            border-radius: 10px;
            background: rgba(11,24,34,0.08);
            cursor: pointer;
          }
          @media (min-width: 640px) {
            .gallery-thumb { border-radius: 12px; }
          }

          /* Featured item fills its 2×2 slot naturally */
          .gallery-item-featured .gallery-thumb {
            aspect-ratio: 1 / 1;
            height: 100%;
          }

          /* Caption */
          .gallery-caption {
            position: absolute;
            inset-x: 0; bottom: 0;
            padding: 20px 10px 10px;
            background: linear-gradient(to top, rgba(11,24,34,0.88), transparent);
            color: white;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-family: var(--font-sans);
          }
          .gallery-thumb:hover .gallery-caption { opacity: 1; }
          .gallery-thumb:hover img { transform: scale(1.05); }
          .gallery-thumb img { transition: transform 0.5s ease; }

          /* Lightbox */
          .lightbox-overlay {
            position: fixed;
            inset: 0;
            z-index: 9000;
            background: rgba(5,12,18,0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            backdrop-filter: blur(12px);
          }
          .lightbox-img {
            max-width: min(92vw, 900px);
            max-height: 88vh;
            border-radius: 14px;
            box-shadow: 0 32px 80px rgba(0,0,0,0.7);
            object-fit: contain;
          }
        `}</style>

        <div className="mt-12">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => {
              const isFeatured = featuredIndexes.has(index);
              return (
                <motion.div
                  key={item.src}
                  className={isFeatured ? "gallery-item-featured" : ""}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.3), ease: smoothEase }}
                >
                  <div
                    className="gallery-thumb"
                    onClick={() => setLightbox({ src: item.src, title: item.title })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === "Enter" && setLightbox({ src: item.src, title: item.title })}
                    aria-label={`View ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={(item as { src: string; title: string; alt?: string; span: string }).alt || item.title}
                      fill
                      sizes="(max-width:640px) 33vw, (max-width:1024px) 25vw, 20vw"
                      className="object-cover"
                    />
                    {/* Orange inset glow on hover */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-300 hover:opacity-100"
                      style={{ boxShadow: "inset 0 0 0 2px rgba(212,120,10,0.55)" }}
                    />
                    <div className="gallery-caption">{item.title}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition hover:text-white hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.title}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 uppercase text-white/45"
            style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", fontFamily: "var(--font-sans)" }}
          >
            {lightbox.title}
          </p>
        </div>
      )}
    </section>
  );
}
