/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    screens:{
    'xs': {'max': '480px'},
  },
    extend: {
      fontFamily:{
        "bauman": ['Baumans', 'cursive'],
        "signika":['Signika Negative', 'sans-serif'],
        "kanit":['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
