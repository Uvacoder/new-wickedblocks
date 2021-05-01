const colors = require('tailwindcss/colors');
module.exports = {
  //mode: 'jit',

  purge: {
    enabled: false,
    content: [
      './public/*/*/*.html',
      './public/*.html',
      './src/**/*.js',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '0': 0,
       '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
        'auto': 'auto',
      },
       boxShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        thick: '0px 13px 40px rgb(0 0 0 / 30%), 0px 4px 4px rgb(0 0 0 / 20%)',
      },
       fontSize: {
       'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
      },
      height: {
        threescreen: '75vh',
        halfscreen: '50vh',
      },

      colors: {
        transparent: 'transparent',
      current: 'currentColor',

        white: colors.white,
        blueGray: colors.blueGray,
        black: colors.black,
        blue: colors.blue,

        'gray': {
          '5': '#F7F7F7',
  '10': '#EAEAEA',
  '20': '#D1D1D1',
  '30': '#B7B7B7',
  '40': '#9E9E9E',
          '50': '#848484',
          '100': '#777777',
          '200': '#5E5E5E',
          '300': '#444444',
          '400': '#2B2B2B',
          '500': '#121212',

        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
        require('@tailwindcss/typography'),
  ],
}