/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'yellow': '#D4BA70',
      'dark-yellow': '#9D8759',
      'dark-blue': '#1F2F3C',
      'blue': '#152029',
      'green': '#637356',
      'dark-green': '#424d39',
      'white': '#FFFFFF',
      'error': '#ff8080',
      'gray': '#D3D3D3'
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}