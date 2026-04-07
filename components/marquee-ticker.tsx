"use client";

const items = [
  "40+ Rides & Attractions",
  "Water World Zone",
  "Thrill Zone",
  "Family Zone",
  "500K+ Happy Visitors",
  "#1 in Kerala Footfall",
  "Open 11 AM – 6 PM Daily",
  "Fish Aquarium — Malabar's Best",
  "13 Years of Joy",
  "Wave Pool",
  "Rain Dance",
  "Tornado",
  "Cyclone Coaster — New Ride",
  "Aquatech Tank — New Experience",
  "42 Rides & Attractions",
  "Harakkiri Water Slide",
  "50 Feet Water Fall",
  "WhatsApp Booking",
  "Instant Confirmation",
];

type MarqueeTickerProps = {
  className?: string;
};

export function MarqueeTicker({ className = "" }: MarqueeTickerProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`group relative overflow-hidden py-4 ${className}`}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(11,24,34,0.8)",
      }}
    >
      {/* Fade edges with mask */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      />

      <div
        className="animate-marquee flex w-max gap-0 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "30s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-6">
            <span
              className="whitespace-nowrap text-white/50"
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
              }}
            >
              {item}
            </span>
            {/* Alternating orange and blue dots */}
            <span
              className="flex-shrink-0 rounded-full"
              style={{
                width: "7px",
                height: "7px",
                background: i % 2 === 0 ? "#D4780A" : "#1BB8E8",
                opacity: 0.75,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
