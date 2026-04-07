"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    if (!sessionStorage.getItem("ff_loaded")) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("ff_loaded", "1");
      }, 900);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="page-loader"
      style={{
        transition: "opacity 0.5s ease",
        opacity: 1,
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="relative h-16 w-16 overflow-hidden rounded-full"
          style={{ border: "2px solid rgba(212,120,10,0.7)", boxShadow: "0 0 24px rgba(212,120,10,0.3)" }}
        >
          <Image src="/flora-fantasia-logo.jpeg" alt="Flora Fantasia" fill className="object-cover" />
        </div>
        {/* Loading bar */}
        <div
          className="h-0.5 w-20 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #D4780A, #F5A623)",
              animation: "load-bar 0.85s ease forwards",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes load-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
