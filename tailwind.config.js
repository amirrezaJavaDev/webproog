/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
      './app/**/*.{js,jsx}',
      './components/**/*.{js,jsx}'
  ],
  theme: {
    fontFamily:{
        vazir:['Vazir']
    },
    extend: {
        lineHeight:{
            '0':'0',
        }
    },
  },
  plugins: [],
}

