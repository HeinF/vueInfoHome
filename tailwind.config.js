/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      'juul': '#cb2027',
    }),
    fontFamily: {
      sans: [ 'Tahoma', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {},
  },
  plugins: [],
}

