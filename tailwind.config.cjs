/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      brown: {
        '900': '#8F5231',
        '800': '#9F491E',
        '700': '#BF6F2E',
        '600': '#AB6E59 ',
        '500': '#A67D63',
        '400': '#C7AC8F',
      },
      gold: {
        '900': '#FFBB22',
        '500': '#FFCF67',
        '100': '#FFFAEE',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
