"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home",        href: "#hero" },
  { label: "Attractions", href: "#rides" },
  { label: "Aquarium",    href: "/fish-aquarium" },
  { label: "Plan Visit",  href: "#location" },
  { label: "Blog",        href: "/blog" },
  { label: "Tickets",     href: "#booking" },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "rides", "location", "booking"];
    const observers: IntersectionObserver[] = [];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        entries => { if (entries[0].isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[60]"
      style={{
        background: "rgba(11,24,34,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(212,120,10,0.25)",
      }}
    >
      {/* Nav content */}
      <div className="shell relative flex items-center justify-between py-3 md:py-3.5">

        {/* Left — Logo only */}
        <a href="#hero" className="flex items-center">
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-full"
            style={{
              width: "clamp(52px, 12vw, 72px)",
              height: "clamp(52px, 12vw, 72px)",
              border: "2.5px solid rgba(212,120,10,0.75)",
              boxShadow: "0 0 0 4px rgba(212,120,10,0.18), 0 6px 28px rgba(0,0,0,0.55)",
            }}
          >
            <Image
              src="/flora-fantasia-logo.jpeg"
              alt="Flora Fantasia"
              fill
              sizes="(max-width: 600px) 52px, 72px"
              className="object-cover"
            />
          </div>
        </a>

        {/* Center — Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
            <a
              key={item.label}
              href={item.href}
              className="group relative transition-colors duration-200 hover:text-white"
              style={{ fontSize: "14px", fontWeight: 500, fontFamily: "var(--font-sans)", color: isActive ? "#F5A623" : "rgba(255,255,255,0.75)" }}
            >
              {item.label}
              <span
                className="absolute -bottom-0.5 left-0 h-[1.5px] rounded-full bg-[#D4780A] transition-all duration-300 group-hover:w-full"
                style={{ width: isActive ? "100%" : "0" }}
              />
            </a>
            );
          })}
        </nav>

        {/* Right — Book Now + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden rounded-full px-6 py-2.5 text-white transition-all duration-200 hover:-translate-y-px md:flex"
            style={{
              background: "#D4780A",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              fontFamily: "var(--font-sans)",
              boxShadow: "0 4px 16px rgba(212,120,10,0.45)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(212,120,10,0.6), 0 4px 16px rgba(212,120,10,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(212,120,10,0.45)"; }}
          >
            Book Now
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full transition hover:bg-white/10 md:hidden"
            style={{ border: "1px solid rgba(255,255,255,0.25)" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 origin-center bg-white transition-all duration-200 ${
                  i === 0 ? `w-5 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}` :
                  i === 1 ? `w-4 ${menuOpen ? "scale-x-0 opacity-0" : ""}` :
                  `w-5 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[-1] flex flex-col items-center justify-center backdrop-blur-2xl md:hidden"
            style={{ background: "rgba(11,24,34,0.96)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-display font-black text-white/80 transition hover:text-white"
                  style={{ fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "-0.01em" }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-4 rounded-full px-8 py-3.5 text-white"
                style={{ background: "#D4780A", fontSize: "16px", fontWeight: 600, fontFamily: "var(--font-sans)" }}
              >
                Book Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
