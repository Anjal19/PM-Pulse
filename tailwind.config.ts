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
        google: {
          blue: "#1a73e8",
          "blue-dark": "#1557b0",
          "blue-light": "#e8f0fe",
          gray: "#5f6368",
          "gray-light": "#f8f9fa",
          "gray-border": "#dadce0",
          dark: "#202124",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Google Sans", "Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
        "card-hover": "0 1px 3px 0 rgba(60,64,67,.3), 0 4px 8px 3px rgba(60,64,67,.15)",
      },
    },
  },
  plugins: [],
};

export default config;
