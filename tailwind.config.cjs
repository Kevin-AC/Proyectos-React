/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width:{
        '1170':'1170px'
      },
      height:{
        '368':'368px'
      },
      boxShadow:{
        'Shadow':'0 3px 13px 1 px rgb(0 0 0 /9%)'
      },
      fontFamily:{
        'Lato':'Lato'
      }
    },
  },
  plugins: [],
}
