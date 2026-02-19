import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bitcoin Theme Colors
        bitcoin: {
          DEFAULT: "#FF6102",
          hover: "#e85802",
          light: "rgba(255, 97, 2, 0.15)",
        },
        background: {
          dark: "#212121",
          card: "#2a2a2a",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-lexend)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(255, 97, 2, 0.25)",
        "glow-sm": "0 0 20px -5px rgba(255, 97, 2, 0.2)",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
