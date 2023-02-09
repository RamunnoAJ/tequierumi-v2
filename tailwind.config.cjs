/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#f1eecf',
          500: '#eaf1bb',
        },
        accent: {
          400: '#ef8405',
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(220px, 300px))',
      },
    },
    fontFamily: {
      Montserrat: 'Montserrat Alternates',
    },
    minHeight: {
      'full-screen': 'calc(100vh - 128px)',
    },
  },
  plugins: [],
}
