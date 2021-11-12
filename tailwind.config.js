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
      margin: {
        '1/4': '1px',
        '3/4': '3px',
        '1/2': '2px',
        1.5: '0.375rem',
        2.5: '0.625rem',
        7.5: '1.875rem',
        15: '3.75rem',
        30: '7.5rem',
      },
      padding: {
        '1/4': '1px',
        '3/4': '3px',
        '1/2': '2px',
        1.5: '0.375rem',
        2.5: '0.625rem',
        7.5: '1.875rem',
        15: '3.75rem',
        '95px': '95px',
      },
      spacing: {
        7.5: '1.875rem',
      },
      borderRadius: {
        5: '20px',
        7.5: '30px',
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '2.5xl': '1.75rem',
        5.5: '1.375rem',
      },
      lineHeight: {
        13: '3.25rem',
        17.5: '4.375rem',
      },
      width: {
        22.5: '5.625rem',
        69: '17.25rem',
        100: '25rem',
        '350px': '350px',
      },
      height: {
        13: '3.25rem',
        15: '3.75rem',
        31: '7.75rem',
        50: '12.5rem',
        100: '25rem',
      },
      colors: {
        primary: {
          1: 'rgb(127, 151, 123)',
          1.2: 'rgba(127, 151, 123, 0.2)',
          2: 'rgba(101, 137, 95, 1)',
          3: 'rgba(110, 125, 96, 1)',
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
        warning: {
          1: 'rgba(255, 114, 94, 1)',
        },
        highlight: 'rgb(224, 218, 72)',
        info: 'rgba(190, 163, 99, 1)',
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
