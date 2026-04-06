"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";

export function ParkVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section
      id="park-video"
      className="section-padding relative overflow-hidden"
      style={{ background: "#0B1822" }}
    >
      <div className="shell relative">
        <SectionHeading
          eyebrow="Experience"
          title="See the park in motion."
          text="A full aerial walkthrough of Flora Fantasia — rides, water zones, and the full park atmosphere."
          align="center"
          variant="dark"
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.55)",
          }}
        >
          <video
            ref={videoRef}
            src="/park-overview.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            style={{ display: "block", maxHeight: "min(75vh, 480px)", objectFit: "cover" }}
          />

          {/* Unmute / mute button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 hover:brightness-110"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.06em",
            }}
          >
            {muted ? (
              <>
                {/* Speaker off icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
                Tap for sound
              </>
            ) : (
              <>
                {/* Speaker on icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
                Sound on
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
