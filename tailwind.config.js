/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./hooks/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Montserrat", "sans-serif"],
        sans:    ["var(--font-sans)", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          bg:     "#0B1822",
          navy:   "#0B1822",
          teal:   "#0D3D4A",
          orange: "#D4780A",
          blue:   "#1BB8E8",
          gold:   "#F5C842",
          cream:  "#FFF8F0",
        },
      },
      boxShadow: {
        "glow-orange": "0 0 60px rgba(212,120,10,0.28), 0 0 120px rgba(212,120,10,0.10)",
        "glow-blue":   "0 0 50px rgba(27,184,232,0.25)",
        "glow-gold":   "0 0 40px rgba(245,200,66,0.24)",
        card:  "0 24px 60px rgba(0,0,0,0.40), 0 6px 16px rgba(0,0,0,0.28)",
        lift:  "0 40px 80px rgba(0,0,0,0.55), 0 12px 28px rgba(0,0,0,0.35)",
      },
      animation: {
        float:        "float 6s ease-in-out infinite",
        "float-2":    "float-delayed 8s ease-in-out infinite 1s",
        "float-3":    "float 7s ease-in-out infinite 2s",
        "float-4":    "float-delayed 9s ease-in-out infinite 0.5s",
        pulseSoft:    "pulseSoft 6s ease-in-out infinite",
        glowPulse:    "glowPulse 4s ease-in-out infinite",
        marquee:      "marquee 35s linear infinite",
        "scroll-hint":"scroll-hint 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-16px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":       { opacity: "0.85", transform: "scale(1.07)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.35" },
          "50%":       { opacity: "0.85" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%":       { transform: "translateY(8px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
