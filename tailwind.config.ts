import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0C",
        obsidian: "#111114",
        graphite: "#1C1C21",
        slate: "#2A2A32",
        iron: "#3D3D48",
        smoke: "#6B6B7A",
        ash: "#9999A8",
        mist: "#CBCBD6",
        pearl: "#E8E8EE",
        white: "#F4F4F7",
        "gold-deep": "#8B6914",
        "gold-true": "#C49A28",
        "gold-warm": "#D4AA3A",
        "gold-light": "#E8C84F",
        "gold-pale": "#F5E299",
        success: "#2ECC71",
        warning: "#F39C12",
        error: "#E74C3C",
        info: "#3498DB",
        verified: "#1ABC9C",
        cream: "#FAF8F4",
        parchment: "#F0ECE4",
        linen: "#E4DDD2",
        taupe: "#8C7B68",
        charcoal: "#2C2C34",
        "gold-alpha10": "rgba(196, 154, 40, 0.10)",
        "gold-alpha20": "rgba(196, 154, 40, 0.20)",
        "gold-alpha40": "rgba(196, 154, 40, 0.40)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        accent: ["var(--font-accent)", "DM Serif Display", "serif"],
      },
      fontSize: {
        xs: "0.6875rem",
        sm: "0.8125rem",
        base: "0.9375rem",
        md: "1.0625rem",
        lg: "1.25rem",
        xl: "1.5625rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5rem",
        "6xl": "7rem",
      },
      letterSpacing: {
        ultra: "0.24em",
        widest: "0.16em",
        wide: "0.06em",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(196,154,40,0.4), 0 4px 24px rgba(196,154,40,0.2)",
        glow: "0 0 40px rgba(196,154,40,0.3), 0 0 80px rgba(196,154,40,0.1)",
        xl: "0 16px 80px rgba(0,0,0,0.6)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        128: "32rem",
      },
      maxWidth: {
        container: "1440px",
      },
      zIndex: {
        nav: "1000",
        modal: "300",
        drawer: "200",
        overlay: "100",
      },
    },
  },
  plugins: [],
};
export default config;
