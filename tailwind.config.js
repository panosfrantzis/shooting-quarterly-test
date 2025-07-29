const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#E9560B',
        secondary: '#575757',
        soft: '#EBEBEB',
        black: '#000000',
      },
      backgroundColor: {
        soft: '#EBEBEB',
      },
    },
  },
  plugins: [typography],
};