/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './src/**/*.vue',
    './src/views/**/*.vue',
    './src/components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin : ['Josefin Sans', 'sans-serif'],
      },
      height: {
        '10vh' : '10vh',
        '90vh' : '90vh',
        



      }
    },
  },
  plugins: [],
}

