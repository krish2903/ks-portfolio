/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sp-white': 'rgba(255, 255, 255, 0.9)',
        'sp-black': '#333333',
        'sp-gray': '#707070',
        'sp-lightgray': '#f0f0f0',
        'dark': '#2e2e2e',
      },
      fontFamily: {
        serif: ['Elsie', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        heading: ['Work Sans', 'serif'],
      },
      backgroundImage: {
        'gradient-1': 'radial-gradient(81.5% 240.42% at 50% -45.06%, #41ddff 23.88%, #738aff 38.18%, #acafff 43.57%, #fff 72.09%, #fff 95.27%)',
        'gradient-2': 'radial-gradient(107.51% 459.9% at 90.49% 100%,rgb(179, 87, 212) 0,rgb(167, 221, 255) 38.73%, #fff 88.54%)',
        'gradient-3': 'radial-gradient(50% 220% at 50% 100%, #ed7dff 0,rgb(84, 189, 255) 25%, #fff 60%, #fff 100%)',
        'gradient-4': 'radial-gradient(77.17% 238.41% at 78.49% 87.84%,rgb(255, 255, 255) 0,rgb(198, 242, 255) 39.94%, #fff 77.52%)',
        'gradient-dark': 'radial-gradient(41.59% 210.88% at 69.83% 7.95%,rgba(255,152,108,.5) 0,rgba(26, 118, 89, 0.5) 29.17%,rgba(39,39,39,.5) 85.72%),radial-gradient(63.42% 175.57% at 52.01% -21.25%, #5bc4ff 22.96%,rgb(51, 88, 67) 39.81%,#000 71.45%)',
        'card-gradient': 'linear-gradient(rgba(61, 61, 61, 0.2) 0%, rgba(143, 143, 143, 0.2) 100%)',
        'card-hover-gradient': 'linear-gradient( rgba(121, 198, 246, 0.69) 0%,rgba(172, 175, 255, 0.76) 100%)',
      },
    },
  },
  plugins: [],
}

