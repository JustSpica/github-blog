/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Nunito, sans-serif",
    },
    extend: {
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
      backgroundImage: {
        header: "url('../public/header-background.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
