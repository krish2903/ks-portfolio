/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lux-green': '#535A4A',
        'lux-cream': '#ECE9E1',
        'lux-gold': '#8F6F53',
        'lux-brown': '#98867B',
        'sp-white': '#FAFAFA',
        'sp-black': '#333333',
        'sp-gray': '#707070',
        'sp-lightgray': '#f0f0f0',
        'dark': '#2e2e2e',
      },
      fontFamily: {
        proxima: ['Poppins', 'sans-serif'],
        heading: ['Work Sans', 'serif'],
      }
    },
  },
  plugins: [],
}

