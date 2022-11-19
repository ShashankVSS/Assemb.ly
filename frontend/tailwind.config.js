/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#f8f7ff",
        "lavender": "#b8b8ff",
        "purple": "#9381ff",
        "beige": "#ffeedd",
        "peach": "#ffd8be",
      },
      scale: {
        'flip': '-1'
      }
    },
  },
  plugins: [],
}