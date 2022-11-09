/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#f1eecf',
          500: '#eaf1bb'
        },
        accent: {
          400: '#ef8405'
        }
      }
    },
    fontFamily: {
      Montserrat: 'Montserrat Alternates'
    }
  },
  plugins: []
}
