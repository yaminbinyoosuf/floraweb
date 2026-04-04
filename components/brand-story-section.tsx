"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import {
  aboutExperience,
  destinationCopy,
  editorialPanels,
  featureHighlights,
} from "@/lib/data";

export function BrandStorySection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%)]" />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Park Narrative"
          title="The Sound of Grandeur. A Park of Pride."
          text="An unforgettable trip experience — where fun comes alive."
        />

        <div className="mt-12 grid gap-8">
          {editorialPanels.map((panel, index) => (
            <motion.article
              key={panel.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="premium-border overflow-hidden rounded-[2rem] p-[1px]"
            >
              <div className="glass-panel grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[280px]">
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(4,7,13,0.65)_100%)]" />
                </div>
                <div className="p-8 md:p-10">
                  <p className="eyebrow">{panel.eyebrow}</p>
                  <h3 className="mt-5 text-3xl font-semibold leading-tight text-[var(--text-100)] md:text-4xl">
                    {panel.title}
                  </h3>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-300)]">
                    {panel.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="glass-panel premium-border rounded-[2rem] p-8 md:p-10"
          >
            <p className="eyebrow">Family Fun</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-100)] md:text-5xl">
              {aboutExperience.title}
            </h3>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--text-500)]">
              {aboutExperience.subtitle}
            </p>
            <div className="mt-8 space-y-5">
              {aboutExperience.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[var(--text-300)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="glass-panel premium-border rounded-[2rem] p-8 md:p-10"
          >
            <p className="eyebrow">Destination</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-100)] md:text-4xl">
              {destinationCopy.title}
            </h3>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--text-500)]">
              {destinationCopy.subtitle}
            </p>
            <p className="mt-8 text-base leading-8 text-[var(--text-300)]">
              {destinationCopy.text}
            </p>
            <p className="mt-6 text-base leading-8 text-[var(--text-300)]">
              {destinationCopy.closing}
            </p>

            <div className="mt-8 grid gap-3">
              {featureHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-[rgba(16,24,32,0.08)] bg-white/72 px-4 py-3 text-sm text-[var(--text-300)] shadow-[0_10px_24px_rgba(15,23,34,0.04)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
