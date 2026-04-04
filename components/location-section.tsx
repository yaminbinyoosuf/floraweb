"use client";

import { LiquidButton, SectionHeading } from "@/components/ui";
import { DIRECTIONS_LINK, parkHours } from "@/lib/data";

export function LocationSection() {
  return (
    <section id="location" className="section-padding relative">
      <div className="shell">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Plan the route before the gates open."
              text="Flora Fantasia Amusement Park, Vengad, Kerala, India."
            />
            <p className="mt-8 max-w-lg text-base leading-8 text-[var(--text-300)]">
              The park is positioned for day trips, family outings, and quick escape
              weekends across Malabar. Tap through for live directions on Google Maps.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[rgba(16,24,32,0.08)] bg-white/82 shadow-[0_16px_38px_rgba(15,23,34,0.06)]">
              <div className="border-b border-[rgba(16,24,32,0.08)] px-6 py-4">
                <p className="eyebrow">Park Timings</p>
              </div>
              <div className="px-6 py-3">
                {parkHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 border-b border-[rgba(16,24,32,0.06)] py-3 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-[var(--text-100)]">
                      {item.day}
                    </span>
                    <span className="text-sm text-[var(--text-300)]">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <LiquidButton href={DIRECTIONS_LINK} className="mt-8">
              Get Directions
            </LiquidButton>
          </div>

          <div className="premium-border overflow-hidden rounded-[2rem] p-[1px]">
            <div className="glass-panel overflow-hidden rounded-[2rem]">
              <iframe
                title="Flora Fantasia location"
                src="https://www.google.com/maps?q=Flora%20Fantasia%20Amusement%20Park%2C%20Kerala&z=14&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
