"use client";

const items = [
  "40+ Rides & Attractions",
  "Water World Zone",
  "Thrill Zone",
  "Family Zone",
  "500K+ Happy Visitors",
  "#1 in Kerala Footfall",
  "Open 11 AM – 6 PM Daily",
  "Aquarium Experience",
  "13 Years of Joy",
  "Wave Pool",
  "Rain Dance",
  "Tornado",
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
      className={`group relative overflow-hidden border-y py-4 ${className}`}
      style={{
        borderColor: "rgba(255,255,255,0.07)",
        background: "rgba(11,24,34,0.8)",
      }}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
        style={{ background: "linear-gradient(90deg,#0B1822,transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
        style={{ background: "linear-gradient(270deg,#0B1822,transparent)" }}
      />

      <div className="animate-marquee flex w-max gap-0 group-hover:[animation-play-state:paused]">
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
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{
                background: i % 2 === 0 ? "#D4780A" : "#1BB8E8",
                opacity: 0.7,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
