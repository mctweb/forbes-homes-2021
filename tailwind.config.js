// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  variants: {
    extend: {
      translate: ['group-hover']
    }
  },
  theme: {
    fontFamily: {
      sans: ['Amiko', 'Arial', 'Helvetica', 'sans-serif'],
      serif: ['MrsEaves', 'serif']
    },
    extend: {
      colors: {
        blue: '#002C57',
        taupe: '#8C7D6B'
      }
    }
  }
}
