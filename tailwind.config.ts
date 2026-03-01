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
        // Bailout Brand Colors (Narrativa Bitcoin)
        nero21: "#212121",
        arancione6102: "#FF6102",
        arancioneGenesis: "#F7931A",
        grigioCypherpunk: "#2C2C2C",
        biancoWhitepaper: "#FAFAFA",
        
        // Semantic aliases
        background: {
          DEFAULT: "#212121", // nero21
          card: "#2C2C2C",    // grigioCypherpunk
        },
        primary: {
          DEFAULT: "#FF6102", // arancione6102
          hover: "#e85802",
        },
        text: {
          primary: "#FAFAFA", // biancoWhitepaper
          secondary: "#9CA3AF",
        },
      },
      fontFamily: {
        heading: ["var(--font-ubuntu)", "sans-serif"],
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
