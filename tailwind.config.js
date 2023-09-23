/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        'circular': ['Circular Std', 'Poppins', 'sans-serif']
      },
      colors: {
        "orange": "#FF9401",
        "abu-abu": '#685D5D',
        "agak-hitam": "#2E2E2E",
        "hitam-soft": "#3F3232",
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(180deg, rgba(255, 148, 1, 0.05) 0%, rgba(255, 237, 211, 0) 100%)'
      }
    },
  },
  plugins: [],
}

