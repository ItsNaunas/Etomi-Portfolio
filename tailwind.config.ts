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
        brand: {
          dark: "#52131e",
          gold: "#ffbd59",
          light: "#faf8f3",
          accent: "#ffbd59",
        },
        text: {
          main: "#2b2b2b",
          invert: "#f5f3ef",
        },
        border: {
          card: "rgba(0,0,0,0.07)",
        },
        shadow: {
          card: "0 24px 40px -8px rgba(0,0,0,0.12)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 40px -8px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
