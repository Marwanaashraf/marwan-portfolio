/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#29BFFF",
        secondry: "#C66AFF",
        card_dark: "#0F172A",
        card_light: "#F1F5F9",
        dark:"#94A3B8",
        light:"#4A5565"
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
