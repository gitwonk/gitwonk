/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `pages/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    `layouts/**/*.{js,ts,jsx,tsx}`,
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
    // Next 13 app directory
    "./app/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        display: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        black: {
          subtle: "#1F1F1F",
          pure: "#000000",
          DEFAULT: "#121212",
        },
        white: {
          subtle: "#F7F7F7",
          pure: "#FFFFFF",
          DEFAULT: "#fcfcfc",
        },
        brand: {
          50: "#eafff4",
          100: "#cdfee3",
          200: "#a0face",
          300: "#63f2b4",
          400: "#25e296",
          500: "#00c77e",
          600: "#00a468",
          700: "#008357",
          800: "#006746",
          900: "#00553b",
          DEFAULT: "#00c77e",
        },
        gray: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#171717",
          DEFAULT: "#171717",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
