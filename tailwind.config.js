module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      margin: {},
      padding: {
        1.5: '0.375rem',
      },
      gap: {},
      borderRadius: {
        7.5: '30px',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      lineHeight: {},
      width: {
        69: '17.25rem',
      },
      height: {},
      colors: {
        primary: {
          1: 'rgb(127, 151, 123)',
        },
        second: {
          30: 'rgba(30, 30, 30, 1)',
          100: 'rgba(100, 100, 100, 1)',
          229: 'rgba(229, 229, 229, 1)',
        },
        highlight: 'rgb(224, 218, 72)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1110px',
          },
        },
      });
    },
  ],
};
