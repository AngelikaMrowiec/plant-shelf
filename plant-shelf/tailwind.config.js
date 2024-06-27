/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Slab", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "430px",
      },
      colors: {
        bottleg: {
          light: "#103F18",
          dark: "#0c3213",
          darker: "#09250e",
        },
      },
    },
  },
  plugins: [],
};