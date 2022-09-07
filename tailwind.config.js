/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: { 50: '#f4f7ff', 100: '#e5ecff', 200: '#4977f9' },
      },
    },
  },
  plugins: [],
};
