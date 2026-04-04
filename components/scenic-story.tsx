"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { zones } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function ScenicStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) {
      return;
    }

    const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, scale: 1.08, yPercent: 10 });
      gsap.set(panels[0], { autoAlpha: 1, scale: 1, yPercent: 0 });
      gsap.set(".story-card", { y: 30, autoAlpha: 0 });
      gsap.set(".story-badge", { y: 18, autoAlpha: 0 });

      panels.forEach((panel) => {
        const content = panel.querySelector(".story-copy");
        const stats = panel.querySelectorAll(".story-stat");
        const card = panel.querySelector(".story-card");
        const badge = panel.querySelector(".story-badge");

        gsap.fromTo(
          content,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top center",
            },
          },
        );

        gsap.fromTo(
          stats,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top center",
            },
          },
        );

        gsap.to(card, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top center+=40",
          },
        });

        gsap.to(badge, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top center+=10",
          },
        });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${zones.length * window.innerHeight}`,
          scrub: 1.2,
          pin: stage,
        },
      });

      zones.forEach((zone, index) => {
        if (index > 0) {
          timeline.to(
            stage,
            {
              "--story-accent": zone.accent,
              "--story-glow": zone.ambient,
              "--story-gradient": zone.gradient,
              duration: 1,
            },
            index - 0.15,
          );

          timeline.to(
            panels[index - 1],
            { autoAlpha: 0, scale: 1.08, yPercent: -8, duration: 0.8 },
            index - 0.08,
          );
        }

        timeline.to(
          panels[index],
          {
            autoAlpha: 1,
            scale: 1,
            yPercent: 0,
            duration: 1,
          },
          index,
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="zones"
      ref={sectionRef}
      className="relative h-[320vh]"
      style={
        {
          "--story-accent": zones[0].accent,
          "--story-glow": zones[0].ambient,
          "--story-gradient": zones[0].gradient,
        } as CSSProperties
      }
    >
      <div
        ref={stageRef}
        className="relative h-screen overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, var(--story-glow), transparent 26%), var(--story-gradient)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.44),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.24))]" />
        <div className="absolute inset-x-0 top-6 z-20 flex justify-center px-6">
          <div className="rounded-full border border-[rgba(20,38,61,0.12)] bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-[var(--text-300)] backdrop-blur-lg">
            Scroll Story
          </div>
        </div>

        {zones.map((zone) => (
          <article
            key={zone.id}
            className="story-panel absolute inset-0 flex items-center"
          >
            <div className="shell relative z-10">
              <div className="max-w-5xl">
                <div className="story-copy max-w-3xl">
                  <p className="story-badge mb-4 text-sm uppercase tracking-[0.28em] text-[var(--text-500)]">
                    {zone.momentTitle}
                  </p>
                  <p className="eyebrow">{zone.label}</p>
                  <h2 className="headline-lg mt-6 text-[var(--text-100)] text-balance">
                    {zone.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-300)]">
                    {zone.description}
                  </p>
                </div>
                <div className="story-card mt-8 max-w-2xl rounded-[1.6rem] border border-[rgba(20,38,61,0.1)] bg-white/60 p-6 backdrop-blur-xl">
                  <p className="text-base leading-8 text-[var(--text-100)]">
                    {zone.storyLead}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  {zone.stats.map((stat) => (
                    <div
                      key={stat}
                      className="story-stat rounded-full border border-[rgba(20,38,61,0.12)] bg-white/68 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--text-300)]"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
