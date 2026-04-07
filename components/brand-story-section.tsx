"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { editorialPanels, featureHighlights } from "@/lib/data";
import { smoothEase } from "@/lib/motion";

export function BrandStorySection() {
  return (
    <>
      {/* Main narrative — cream background */}
      <section className="section-padding relative overflow-hidden" style={{ background: "#FFF8F0" }}>
        <div className="shell relative">
          <SectionHeading
            eyebrow="Park Narrative"
            title="The Sound of Grandeur. A Park of Pride."
            text="An unforgettable trip experience — where fun comes alive every single day."
            variant="light"
          />

          {/* Editorial panels — alternating layout */}
          <div className="mt-16 flex flex-col gap-20">
            {editorialPanels.map((panel, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.article
                  key={panel.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: smoothEase }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${isReversed ? "lg:[direction:ltr]" : ""}`}
                    style={{ aspectRatio: "4/3", borderRadius: "20px", boxShadow: "0 8px 40px rgba(11,24,34,0.18)" }}
                  >
                    <Image
                      src={panel.image}
                      alt={panel.imageAlt || panel.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_50%,rgba(11,24,34,0.35)_100%)]" />
                    {/* Warm tint for cream-bg sections */}
                    <div className="absolute inset-0" style={{ background: "rgba(255,200,100,0.04)", mixBlendMode: "multiply" }} />
                  </div>

                  {/* Text */}
                  <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                    <p
                      className="text-[#D4780A] uppercase"
                      style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", fontFamily: "var(--font-sans)" }}
                    >
                      {panel.eyebrow}
                    </p>
                    <div className="mt-3 h-0.5 w-10 rounded-full" style={{ background: "#D4780A" }} />
                    <h3
                      className="mt-5 font-display font-black text-balance"
                      style={{ fontSize: "clamp(1.75rem, 7vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#0B1822" }}
                    >
                      {panel.title}
                    </h3>
                    <p
                      className="mt-5"
                      style={{ fontSize: "16px", lineHeight: "1.75", color: "rgba(11,24,34,0.62)", fontFamily: "var(--font-sans)" }}
                    >
                      {panel.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family Fun feature card — dark navy */}
      <section
        className="relative overflow-hidden noise"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(212,120,10,0.12) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 80% 30%, rgba(27,184,232,0.08) 0%, transparent 40%), " +
            "#0B1822",
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(15,36,48,0.85)" }}
          >
            <div className="grid gap-8 p-6 md:gap-10 md:p-14 lg:grid-cols-[1fr_1fr]">
              {/* Left */}
              <div>
                <p
                  className="uppercase text-[#D4780A]"
                  style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", fontFamily: "var(--font-sans)" }}
                >
                  Family Fun
                </p>
                <h2
                  className="mt-4 font-display font-black text-white text-balance"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
                >
                  Your Perfect Destination for Family Fun and Adventure!
                </h2>
                <p
                  className="mt-4 text-white/45 uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.2em", fontFamily: "var(--font-sans)", fontWeight: 500 }}
                >
                  You will remember this wonderful holiday!
                </p>
              </div>

              {/* Right — feature bento grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featureHighlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: smoothEase }}
                    className="flex items-start gap-3 rounded-xl p-4 transition"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold"
                      style={{ color: "#D4780A", fontSize: "14px" }}
                    >
                      ✓
                    </span>
                    <span
                      className="text-white/70"
                      style={{ fontSize: "0.9rem", fontFamily: "var(--font-sans)", lineHeight: "1.6" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
