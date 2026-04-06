"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { zones } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const zoneConfig = [
  {
    id: "water-world",
    num: "01",
    accent: "#1BB8E8",
    bg: "radial-gradient(ellipse at 20% 40%, rgba(27,184,232,0.20) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(27,184,232,0.10) 0%, transparent 50%), #0B1822",
    pillClass: "bg-[rgba(27,184,232,0.15)] border-[rgba(27,184,232,0.35)] text-[#1BB8E8]",
    numColor: "#1BB8E8",
  },
  {
    id: "thrill-zone",
    num: "02",
    accent: "#D4780A",
    bg: "radial-gradient(ellipse at 20% 40%, rgba(212,120,10,0.22) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(212,120,10,0.12) 0%, transparent 50%), #0B1822",
    pillClass: "bg-[rgba(27,184,232,0.15)] border-[rgba(27,184,232,0.35)] text-[#1BB8E8]",
    numColor: "#D4780A",
  },
  {
    id: "family-zone",
    num: "03",
    accent: "#F5C842",
    bg: "radial-gradient(ellipse at 20% 40%, rgba(245,200,66,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(212,120,10,0.10) 0%, transparent 50%), #0B1822",
    pillClass: "bg-[rgba(245,200,66,0.15)] border-[rgba(245,200,66,0.35)] text-[#F5C842]",
    numColor: "#F5C842",
  },
];

export function ScenicStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef   = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage   = stageRef.current;
    if (!section || !stage) return;

    const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, scale: 1.04, yPercent: 5 });
      gsap.set(panels[0], { autoAlpha: 1, scale: 1, yPercent: 0 });
      gsap.set(".story-card", { y: 28, autoAlpha: 0 });
      gsap.set(".story-badge", { y: 16, autoAlpha: 0 });

      panels.forEach((panel) => {
        gsap.fromTo(panel.querySelector(".story-copy"),
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top center" } });

        gsap.fromTo(panel.querySelectorAll(".story-stat"),
          { autoAlpha: 0, y: 18, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.07, ease: "power2.out",
            scrollTrigger: { trigger: panel, start: "top center" } });

        gsap.to(panel.querySelector(".story-card"),
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top center+=40" } });

        gsap.to(panel.querySelector(".story-badge"),
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: panel, start: "top center+=10" } });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${zones.length * window.innerHeight}`,
          scrub: 1.2,
          pin: stage,
        },
      });

      zones.forEach((_zone, i) => {
        if (i > 0) {
          tl.to(panels[i - 1], { autoAlpha: 0, scale: 1.04, yPercent: -5, duration: 0.8 }, i - 0.08);
        }
        tl.to(panels[i], { autoAlpha: 1, scale: 1, yPercent: 0, duration: 1 }, i);
      });
    }, section);

    return () => { ctx.revert(); };
  }, []);

  return (
    <section
      id="zones"
      ref={sectionRef}
      className="relative h-[320vh]"
    >
      {/* Scroll story label */}
      <div className="pointer-events-none absolute left-8 top-8 z-50 hidden xl:block">
        <span
          className="text-white/25"
          style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-sans)", writingMode: "vertical-rl" }}
        >
          Scroll Story
        </span>
      </div>

      <div
        ref={stageRef}
        className="relative h-screen overflow-hidden noise"
        style={{ background: zoneConfig[0].bg }}
      >
        {/* Zone number watermarks */}
        {zones.map((zone, i) => (
          <div key={zone.id} className="story-panel absolute inset-0 pointer-events-none">
            <span
              className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-display font-black leading-none select-none"
              style={{
                fontSize: "clamp(10rem, 24vw, 22rem)",
                color: "rgba(255,255,255,0.022)",
                letterSpacing: "-0.06em",
              }}
            >
              {zoneConfig[i].num}
            </span>
          </div>
        ))}

        {/* Zone progress indicator */}
        <div className="absolute inset-x-0 top-6 z-20 flex justify-center px-6">
          <div
            className="flex items-center gap-2 rounded-full px-6 py-2 backdrop-blur-xl"
            style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.05)" }}
          >
            {zones.map((z, i) => (
              <span key={z.id} className="flex items-center gap-2">
                {i > 0 && <span className="h-px w-4 bg-white/20" />}
                <span
                  className="text-white/40"
                  style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                >
                  {z.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Panels */}
        {zones.map((zone, i) => (
          <article key={zone.id} className="story-panel absolute inset-0 flex items-center">
            <div className="shell relative z-10">
              <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">

                <div className="story-copy max-w-3xl">
                  {/* Zone number + label */}
                  <p className="story-badge mb-5 flex items-center gap-4">
                    <span
                      className="font-display font-black leading-none"
                      style={{ fontSize: "3.5rem", color: zoneConfig[i].numColor, opacity: 0.65, letterSpacing: "-0.04em" }}
                    >
                      {zoneConfig[i].num}
                    </span>
                    <span
                      className="text-white/35"
                      style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                    >
                      Scroll Story
                    </span>
                  </p>

                  {/* Zone pill */}
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] border ${zoneConfig[i].pillClass}`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {zone.label}
                    </span>
                  </div>

                  <h2
                    className="font-display font-black text-white text-balance"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
                  >
                    {zone.title}
                  </h2>

                  <p
                    className="mt-6 max-w-2xl text-white/55"
                    style={{ fontSize: "1.04rem", lineHeight: "1.88", fontFamily: "var(--font-sans)" }}
                  >
                    {zone.description}
                  </p>

                  {/* Stat chips */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    {zone.stats.map((stat) => (
                      <span
                        key={stat}
                        className="story-stat rounded-full px-5 py-2.5 text-white/65 backdrop-blur-sm"
                        style={{
                          border: `1px solid ${zoneConfig[i].accent}44`,
                          background: `${zoneConfig[i].accent}18`,
                          color: zoneConfig[i].accent,
                          fontSize: "10px",
                          fontWeight: 500,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Story lead card */}
                  <div
                    className="story-card zone-card p-7"
                  >
                    <p
                      className="mb-3 uppercase"
                      style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", color: zoneConfig[i].accent, fontFamily: "var(--font-sans)" }}
                    >
                      Zone Experience
                    </p>
                    <p
                      className="font-medium text-white/80"
                      style={{ fontSize: "1.04rem", lineHeight: "1.78", fontFamily: "var(--font-sans)" }}
                    >
                      {zone.storyLead}
                    </p>
                  </div>

                  {/* Zone Rhythm card */}
                  <div className="story-card zone-card hidden p-7 lg:block">
                    <p
                      className="uppercase"
                      style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", color: "#D4780A", fontFamily: "var(--font-sans)" }}
                    >
                      Zone Rhythm
                    </p>
                    <h3
                      className="mt-4 font-display font-black text-white/90 text-balance"
                      style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                    >
                      Moving through the park should feel like changing scenes, not reading stacked sections.
                    </h3>
                    <p
                      className="mt-5 text-white/50"
                      style={{ fontSize: "0.93rem", lineHeight: "1.82", fontFamily: "var(--font-sans)" }}
                    >
                      Water shifts to thrill, thrill softens into family space. The park story flows instead of stacking into hard boxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,120,10,0.6), rgba(27,184,232,0.6), transparent)" }}
        />
      </div>
    </section>
  );
}
