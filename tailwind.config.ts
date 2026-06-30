import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        elevated: "var(--color-elevated)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        copper: "var(--color-copper)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 7rem)",
      },
      animation: {
        "mesh-drift": "mesh-drift 18s ease-in-out infinite alternate",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        "mesh-drift": {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "100%": { transform: "translate3d(2%, 1%, 0) scale(1.05)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(1%, 2%)" },
          "50%": { transform: "translate(-1%, 1%)" },
          "70%": { transform: "translate(2%, -1%)" },
          "90%": { transform: "translate(-2%, 2%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
