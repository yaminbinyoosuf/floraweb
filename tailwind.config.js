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
      colors: {
        brand: {
          night: "#04070D",
          ocean: "#59D0FF",
          cobalt: "#2C8EFF",
          ember: "#FF7A18",
          sand: "#FFCF73",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.45)",
        aqua: "0 12px 40px rgba(44, 142, 255, 0.24)",
      },
      backgroundImage: {
        "hero-overlay":
          "radial-gradient(circle at top, rgba(89,208,255,0.18), transparent 28%), linear-gradient(180deg, rgba(4,7,13,0.15) 0%, rgba(4,7,13,0.84) 78%, #04070D 100%)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
