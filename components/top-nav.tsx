"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const WA_LINK =
  "https://wa.me/919745239003?text=Hi%2C%20I%20want%20to%20book%20tickets%20for%20Flora%20Fantasia!";

const navItems = [
  { label: "Home",        href: "/"                },
  { label: "Attractions", href: "/rides"            },
  { label: "Aquarium",    href: "/fish-aquarium"    },
  { label: "Plan Visit",  href: "/plan-your-visit"  },
  { label: "Blog",        href: "/blog"             },
  { label: "Tickets",     href: "/tickets"          },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Mount guard — portal needs document.body
  useEffect(() => { setMounted(true); }, []);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`ff-nav${scrolled ? " ff-nav--scrolled" : ""}`}>
        {/* Logo */}
        <a href="/" className="ff-nav__logo">
          <div className="ff-nav__logo-img">
            <Image
              src="/flora-fantasia-logo.jpeg"
              alt="Flora Fantasia"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>
          <span className="ff-nav__brand">Flora Fantasia</span>
        </a>

        {/* Desktop links */}
        <nav className="ff-nav__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`ff-nav__link${pathname === item.href ? " ff-nav__link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="ff-nav__cta"
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className={`ff-nav__burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile overlay — rendered via portal at document.body, bypasses all stacking contexts */}
      {mounted && menuOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(5,12,20,0.98)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 24px 40px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "16px", right: "16px",
              width: "44px", height: "44px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              color: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >✕</button>

          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/flora-fantasia-logo.jpeg"
            alt="Flora Fantasia"
            style={{
              width: "60px", height: "60px",
              borderRadius: "12px",
              objectFit: "cover",
              marginBottom: "32px",
            }}
          />

          {/* Nav links */}
          <nav
            aria-label="Mobile navigation"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: "4px",
              marginBottom: "32px",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  padding: "10px 24px",
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "block",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              background: "#25D366",
              color: "#fff",
              padding: "15px 36px",
              borderRadius: "999px",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              width: "100%",
              maxWidth: "260px",
              marginBottom: "16px",
            }}
          >
            Book Now on WhatsApp
          </a>

          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.2)",
            textAlign: "center",
            margin: 0,
          }}>
            Open Daily · 11 AM – 6 PM · Valancheri, Malappuram
          </p>
        </div>,
        document.body
      )}
    </>
  );
}
