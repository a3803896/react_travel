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
      padding: {},
      gap: {},
      borderRadius: {},
      fontSize: {},
      lineHeight: {},
      width: {
        69: '17.25rem',
      },
      height: {},
      colors: {
        second: {
          100: 'rgba(100, 100, 100, 1)',
          229: 'rgba(229, 229, 229, 1)',
        },
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
