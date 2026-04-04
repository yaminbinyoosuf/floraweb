"use client";

import { motion } from "framer-motion";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

export function FaqSection() {
  return (
    <section className="section-padding relative">
      <div className="shell">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything visitors ask before the day begins."
          text="A quick reference for timings, tickets, safety, lockers, payments, and entry guidance."
        />

        <div className="mt-12 grid gap-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass-panel premium-border rounded-[1.6rem] p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.02em] text-[var(--text-100)]">
                {faq.question}
              </summary>
              <p className="mt-4 text-base leading-8 text-[var(--text-300)]">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
