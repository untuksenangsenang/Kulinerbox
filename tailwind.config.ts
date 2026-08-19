import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#EC4899", // Pink 500
          dark: "#831843", // Pink 900
          light: "#F472B6", // Pink 400
          cream: "#FCE7F3", // Pink 100
          "cream-dark": "#FBCFE8", // Pink 200
          text: "#1C1917",
          muted: "#78716C",
        },
        wa: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(236,72,153,0.92) 0%, rgba(131,24,67,0.88) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #EC4899 0%, #831843 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(131,24,67,0.12)",
        "card-hover": "0 12px 36px -4px rgba(131,24,67,0.22)",
        wa: "0 4px 20px rgba(37,211,102,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
