/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // optional; remove if you don't use dark mode
  theme: {
    extend: {
      colors: {
        sidebar: "#f2ebe8", // soft beige sidebar
        accent:  "#9c825f", // gold/tan accent used across the site
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif:  ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [
    // If you install it: `npm i -D @tailwindcss/forms`
    // require("@tailwindcss/forms"),
  ],
};
