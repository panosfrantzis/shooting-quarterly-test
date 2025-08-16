const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Correct brand colors from your palette
        'christine': '#E9560D',        // Your primary brand orange
        'christine-hover': '#D14A0B',   // Darker for hover states
        'christine-light': '#F2A366',   // Lighter for accents
        'black-haze': '#EAEBEB',        // Your light gray
        'scorpion': '#575656',          // Your dark gray
        'pure-black': '#000000',        // Your black
        
        // Semantic color mapping for easier use
        'brand-primary': '#E9560D',     // Christine
        'brand-secondary': '#575656',   // Scorpion
        'brand-neutral': '#EAEBEB',     // Black Haze
        'brand-text': '#000000',        // Pure Black
      },
      backgroundColor: {
        'soft': '#EAEBEB',              // Fixed - was #EBEBEB
        'brand-soft': '#EAEBEB',
      },
      textColor: {
        'brand-primary': '#E9560D',
        'brand-secondary': '#575656', 
        'brand-black': '#000000',
      }
    },
  },
  plugins: [typography],
};