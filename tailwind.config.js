module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
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
      gap: {
        7.5: '1.875rem',
      },
      borderRadius: {
        100: '100px',
      },
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        15: '3.75rem',
      },
      lineHeight: {
        7.5: '1.875rem',
        12: '3rem',
        15: '3.75rem',
        title: '87px',
      },
      height: {
        7.5: '1.875rem',
      },
      colors: {
        main: {
          default: '#FFC61A',
          darker: 'rgba(230, 179, 23, 1)',
          800: 'rgba(255, 198, 26, 0.8)',
          600: 'rgba(255, 198, 26, 0.6)',
          100: 'rgba(255, 198, 26, 0.1)',
        },
        accent: {
          default: 'rgba(93, 95, 239, 1)',
          darker: 'rgba(84, 86, 216, 1)',
          800: 'rgba(93, 95, 239, 0.8)',
          600: 'rgba(93, 95, 239, 0.6)',
          100: 'rgba(93, 95, 239, 0.1)',
        },
        white: {
          default: 'rgba(255, 255, 255, 1)',
          600: 'rgba(255, 255, 255, 0.6)',
          300: 'rgba(255, 255, 255, 0.3)',
        },
        BG: {
          1: 'rgba(247, 248, 250, 1)',
          2: 'rgba(242, 243, 245, 1)',
        },
        dark: 'rgba(50, 50, 51, 1)',
        silver: 'rgba(100, 101, 102, 1)',
        grey: 'rgba(150, 151, 153, 1)',
        lightgrey: 'rgba(200, 201, 204, 1)',
        divider: 'rgba(220, 222, 224, 1)',
        border: 'rgba(235, 237, 240, 1)',
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
            maxWidth: '1120px',
          },
        },
      });
    },
  ],
};
