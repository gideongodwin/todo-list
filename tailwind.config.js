/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "bauman": ['Baumans', 'cursive'],
        "signika":['Signika Negative', 'sans-serif']
      },
    },
  },
  plugins: [],
}
