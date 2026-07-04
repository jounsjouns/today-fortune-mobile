import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#fbf8ff",
          100: "#f2eaff",
          200: "#e6d7ff",
          300: "#d3bdff",
          400: "#b895f6",
          500: "#9870df",
          600: "#7951bd"
        }
      },
      boxShadow: {
        soft: "0 18px 40px rgba(120, 86, 170, 0.16)",
        card: "0 12px 28px rgba(129, 93, 178, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
