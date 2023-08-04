/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff9301",
        kulrang: "#f7f7ff",
        kulrang_text: "#7b7b7b",
        white: "#ffffff",
        black: "#0b0b13",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif", "monospac"],
        mario: ["New Super Mario Font U", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1000px",
    },
  },
  plugins: [],
};
