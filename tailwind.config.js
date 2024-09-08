module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing: {
      px: '1px',
      0: '0', // 0px
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '1rem', // 16px
      4: '1.5rem', // 24px
      5: '2rem', // 32px
      6: '3rem', // 48px
      7: '4.5rem', // 72px
      8: '6rem', // 96px
      9: '8rem', // 128px
      10: '12rem', // 192px
    },
    fontFamily: {
      // Add your custom font family
      sans: ['SF Pro Display', 'sans-serif'],
    },
    fontSize: {
      // Custom font sizes based on your design
      '6xl': ['3.75rem', { lineHeight: '110%' }], // 60px with line-height 110%
      '5xl': ['3rem', { lineHeight: '110%' }], // 48px with line-height 110%
      '4xl': ['2.25rem', { lineHeight: '110%' }], // 36px with line-height 110%
      '3xl': ['1.875rem', { lineHeight: '110%' }], // 30px with line-height 110%
      '2xl': ['1.5rem', { lineHeight: '110%' }], // 24px with line-height 110%
      xl: ['1.25rem', { lineHeight: '110%' }], // 20px with line-height 110%
      base: ['1rem', { lineHeight: '150%' }], // 16px with line-height 150%
      sm: ['0.875rem', { lineHeight: '150%' }], // 14px with line-height 150%
      xs: ['0.75rem', { lineHeight: '150%' }], // 12px with line-height 150%
      quote: ['1.5rem', { lineHeight: '150%' }], // For quote text
    },
    fontWeight: {
      // Custom font weights from your design
      semibold: 600,
      medium: 500,
      regular: 400,
      light: 300,
    },
    colors: {
      // Primary Colors
      primary: {
        1: '#56F6A0', // Primary 1
        2: '#01D49E', // Primary 2
        3: '#00B195', // Primary 3
        4: '#008780', // Primary 4
        5: '#221158', // Primary 5 (Dark)
      },

      // Gradients (Use these as gradient start and end points)
      gradient: {
        1: ['#56F6A0', '#01D49E'], // Gradient 1
        2: ['#01D49E', '#00B195'], // Gradient 2
        3: ['#00B195', '#008780'], // Gradient 3
        4: ['#008780', '#221158'], // Gradient 4
      },

      // Neutral Colors
      neutral: {
        1: '#F6F6F6', // Neutral 1
        2: '#E6E6E6', // Neutral 2
        3: '#EBEBEB', // Neutral 3
        4: '#DCDDDD', // Neutral 4
        5: '#C2C2C2', // Neutral 5
        6: '#B0B0B0', // Neutral 6
        7: '#717171', // Neutral 7
        8: '#565E5E', // Neutral 8
      },

      // Shades (For background, dividers, text)
      shade: {
        1: '#EFEFEF', // Shade 1
        2: '#D0D1D5', // Shade 2
        3: '#B0B0B0', // Shade 3
        4: '#0D0D1D', // Shade 4 (Darkest)
      },

      // Support Colors (Success, Warning, Error)
      support: {
        success: {
          1: '#208267', // Success 1
          2: '#3AC0AD', // Success 2
          3: '#E7F4E5', // Success background
        },
        warning: {
          1: '#E86339', // Warning 1
          2: '#FB873C', // Warning 2
          3: '#FFF4E4', // Warning background
        },
        error: {
          1: '#ED3241', // Error 1
          2: '#FF616D', // Error 2
          3: '#FFE2E5', // Error background
        },
      },
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      light: '#D3D3D3',
    }),
    fill: (theme) => ({
      ...theme('colors'),
    }),

    boxShadow: {
      sm: '0 2px 10px #00000030', // Shadow Sm
      med: '0 12px 32px #0000001F', // Shadow Med
      lg: '0 8px 36px #0000002B', // Shadow Lg
    },
  },
  plugins: [],
};
