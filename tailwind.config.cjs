/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      slate: {
        50: "#E7EDF4",
        100: "#C4D4E3",
        200: "#AFC2D4",
        300: "#7B96B2",
        400: "#3A536B",
        500: "#1C2F41",
        600: "#112131",
        700: "#0B1B2B",
        800: "#071422",
        900: "#040F1A",
      },
    },
    fontFamily: {
      sans: "Nunito, sans-serif",
    },
    extend: {
      backgroundImage: {
        header: "url('src/assets/svgs/header-background.svg')",
      },
    },
  },
  plugins: [],
};