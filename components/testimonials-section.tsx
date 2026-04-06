"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/data";
import { smoothEase } from "@/lib/motion";

export function TestimonialsSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#FFF8F0" }}
    >
      <div className="shell relative">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="What families say about us."
          text="From school groups and family outings to solo adventurers — hear directly from the visitors who made Flora Fantasia their favourite destination."
          variant="light"
        />

        {/* Desktop 3-col grid + mobile horizontal scroll */}
        <div className="mt-14 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`${t.name}-${t.location}`} testimonial={t} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden" style={{ scrollbarWidth: "none" }}>
          {testimonials.map((t, i) => (
            <div key={`mobile-${t.name}`} className="w-[88vw] flex-shrink-0 snap-start">
              <TestimonialCard testimonial={t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: { text: string; name: string; location: string };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: smoothEase }}
      className="group relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 16px rgba(11,24,34,0.07), 0 1px 4px rgba(11,24,34,0.04)",
        border: "1px solid rgba(11,24,34,0.06)",
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,120,10,0.12), 0 2px 8px rgba(11,24,34,0.06)"; e.currentTarget.style.borderColor = "rgba(212,120,10,0.2)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(11,24,34,0.07), 0 1px 4px rgba(11,24,34,0.04)"; e.currentTarget.style.borderColor = "rgba(11,24,34,0.06)"; }}
    >
      {/* Stars */}
      <div className="mb-5 flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, si) => (
          <svg key={si} width="13" height="13" viewBox="0 0 14 14" fill="#F5C842">
            <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.5l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
          </svg>
        ))}
        <span
          className="ml-1"
          style={{ fontSize: "10px", fontWeight: 500, color: "rgba(11,24,34,0.35)", fontFamily: "var(--font-sans)" }}
        >
          5.0
        </span>
      </div>

      {/* Quote watermark */}
      <div
        className="pointer-events-none absolute -right-2 -top-4 select-none font-display font-black leading-none"
        style={{ fontSize: "7rem", color: "rgba(212,120,10,0.05)" }}
        aria-hidden
      >
        "
      </div>

      <p
        className="italic"
        style={{ fontSize: "0.97rem", lineHeight: "1.88", color: "rgba(11,24,34,0.72)", fontFamily: "var(--font-sans)" }}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div
        className="mt-6 flex items-center gap-3.5 border-t pt-5"
        style={{ borderColor: "rgba(11,24,34,0.06)" }}
      >
        {/* Avatar */}
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-display font-black text-white"
          style={{ background: "#D4780A", fontSize: "14px" }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p
            className="font-display font-bold"
            style={{ fontSize: "0.93rem", color: "#0B1822", letterSpacing: "-0.01em" }}
          >
            {testimonial.name}
          </p>
          <p
            style={{ fontSize: "0.8rem", color: "rgba(11,24,34,0.45)", fontFamily: "var(--font-sans)" }}
          >
            {testimonial.location}
          </p>
        </div>
        <div className="ml-auto">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              border: "1px solid rgba(212,120,10,0.2)",
              background: "rgba(212,120,10,0.06)",
              color: "#D4780A",
              fontSize: "8px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
            }}
          >
            ✓ Verified
          </span>
        </div>
      </div>
    </motion.article>
  );
}
