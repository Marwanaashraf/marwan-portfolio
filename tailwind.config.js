/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#29BFFF",
        secondry: "#C66AFF",
        card_dark: "#0F172A",
        card_light: "#F1F5F9",
        dark: "#94A3B8",
        light: "#4A5565",
        error: "#FB2C36",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
