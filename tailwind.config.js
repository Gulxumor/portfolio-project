/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff9301",
        lightOrange: "#fdba74",
        kulrang: "#f7f7ff",
        kulrang_text: "#7b7b7b",
        white: "#ffffff",
        black: "#0b0b13",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif", "monospac"],
        mario: ["New Super Mario Font U", "sans-serif"],
        gagalin: ["Gagalin","sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
