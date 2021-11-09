module.exports = {
  mode: 'jit',
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
      margin: {
        2.5: '0.625rem',
      },
      padding: {
        1.5: '0.375rem',
        2.5: '0.625rem',
        7.5: '1.875rem',
        '95px': '95px',
      },
      gap: {},
      borderRadius: {
        7.5: '30px',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      lineHeight: {
        17.5: '4.375rem',
      },
      width: {
        69: '17.25rem',
        100: '25rem',
        '350px': '350px',
      },
      height: {
        100: '25rem',
      },
      colors: {
        primary: {
          1: 'rgb(127, 151, 123)',
          1.2: 'rgba(127, 151, 123, 0.2)',
        },
        second: {
          30: 'rgba(30, 30, 30, 1)',
          47: 'rgba(47, 47, 47, 1)',
          100: 'rgba(100, 100, 100, 1)',
          158: 'rgba(158, 158, 158, 1)',
          229: 'rgba(229, 229, 229, 1)',
          230: 'rgba(230,230,230,1)',
          249: 'rgba(249,249,249,1)',
        },
        highlight: 'rgb(224, 218, 72)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
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
