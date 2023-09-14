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
        poppins: ['Poppins', 'sans-serif']
      },
      height: {
        '10vh' : '10vh',
        '90vh' : '90vh',
        '750px' : '750px'
      },
      width: {
        '84' : '28rem',
      },
      borderColor : {
        'gold' : '#C68F77'
      }
    },
  },
  plugins: [],
}
