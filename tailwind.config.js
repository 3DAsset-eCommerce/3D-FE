module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '3xs': '0.2rem',
      '2xs': '0.4em',
      xs: '0.8rem',
      sm: [
        '1.2rem',
        {
          fontWeight: '400',
          lineHeight: '1.25rem',
        },
      ],
      mm: [
        '1.4rem',
        { fontWeight: '500' }
      ],
      base: [
        '1.6rem',
        {
          fontWeight: '500',
          lineHeight: '1.5rem',
        },
      ],
      lg: '2.4rem',
      xl: '3.2rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          'blue-900': '#0F2042',
          main: '#3399FF',
          darkblue: '#237FDB',
          'darkblue-hover': '#0E6DCC',
          'newlloyd-button': '#248FEF',
        },
        point: {
          red: '#933224',
          yellow: '#EAB737',
          green: '#11B0A8',
          'green-hover': '#FF6651',
          'red-text': '#07AAA2',
        },
        bg: {
          0: '#1A1C1F',
          1: '#1E2023',
          2: '#23262D',
          3: '#363B43',
          4: '#151719',
        },
        neutral: {
          'white-0': '#FFF',
          'white-50': '#FCFCFC',
          'navy-100': '#C7D1DB',
          'navy-200': '#A4AFBA',
          'navy-300': '#737C85',
          'navy-800': '#5A5F64',
          'navy-850': '#394149',
          'navy-900': '#21252C',
          'navy-950': '#171A1D',
          'navy-1000': '#101010',
        },
        transparent: {
          gray: '#EBECF0',
          navy: '#FAFBFC',
          'navy-15': 'rgba(250, 251, 252, 0.15)',
          'navy-30': 'rgba(159, 173, 188, 0.3)',
          'navy-second': '#9FADBC',
          blue: '#60AFFF',
          darkblue: '#237FDB',
        },
      },
    },
  },
  plugins: [],
};
