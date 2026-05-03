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
        primary: "#FF6B00",
        "primary-dark": "#E55A00",
        "primary-light": "#FF8A33",
        "primary-vivid": "#FF4500",
        cream: "#FFF8F3",
        dark: "#1A1A2E",
        "dark-gray": "#2D2D2D",
        "mid-gray": "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF6B00 0%, #FF4500 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #FFF3E8 0%, #FFE0C2 50%, #FFF8F3 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,107,0,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255,107,0,0.6)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        orange: "0 4px 24px rgba(255, 107, 0, 0.25)",
        "orange-lg": "0 8px 40px rgba(255, 107, 0, 0.35)",
        card: "0 2px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        skillsphere: {
          primary: "#FF6B00",
          secondary: "#FF8A33",
          accent: "#FF4500",
          neutral: "#2D2D2D",
          "base-100": "#FFFFFF",
          "base-200": "#FFF8F3",
          "base-300": "#FFE0C2",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
};

export default config;
