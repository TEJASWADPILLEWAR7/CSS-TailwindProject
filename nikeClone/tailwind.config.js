/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: ["material-symbols-outlined"],
  theme: {
    extend: {
      fontFamily: {
        material: ['"Material Symbols Outlined"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
