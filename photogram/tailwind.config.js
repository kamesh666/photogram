/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cupla:['Mea Culpa','cursive'],
        secular:["Secular One","sans-serif"],
        sans:['Open Sans','sans-serif'],
        billabong:['billabong','sans-serif']
      }
    },
  },
  plugins: [],
}
