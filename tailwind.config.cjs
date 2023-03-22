/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'IBM':'IBM Plex Mono',
      },
      boxShadow:{
        'bShadow':'-1px 4px 1px 1px rgb(255, 255, 255)',
      }
    },
  },
  plugins: [],
}
