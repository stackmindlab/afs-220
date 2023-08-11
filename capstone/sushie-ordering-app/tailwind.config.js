// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Specify the files to scan for Tailwind CSS classes
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  
  // Customize the default Tailwind theme
  theme: {
    extend: {
      // Extend the font family options
      fontFamily: {
        // Add a new font family named "sans" with custom fonts
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans],
      },
      // Extend the color palette with custom colors
      colors: {
        tomato: '#E50914',      // Custom color "tomato"
        marigold: '#ffbe0b',    // Custom color "marigold"
      },
    },
  },
  
  // Specify any additional Tailwind CSS plugins to use
  plugins: [],
};

