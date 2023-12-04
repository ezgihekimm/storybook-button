import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo, sans-serif'],
        local: ['Archivo-Semi'],
      },
      colors: {
        primary: {
          'blue-50': '#E2EDFE',
          'blue-100': '#B3D1FE',
          'blue-200': '#81B3FC',
          'blue-300': '#5195FB',
          'blue-400': '#287CFB',
          'blue-500': '#0066FF',
          'blue-600': '#005EEE',
          'blue-700': '#0056D4',
          'blue-800': '#004BB9',
          'blue-900': '#023B94',
        },
        secondary: {
          'blue-50': '#DFDFF1',
          'blue-100': '#AEADDE',
          'blue-200': '#7877C8',
          'blue-300': '#4846AC',
          'blue-400': '#363481',
          'blue-500': '#25245C',
          'blue-600': '#212053',
          'blue-700': '#1B1A45',
          'blue-800': '#131338',
          'blue-900': '#0C0A24',
        },
        green: {
          '50': '#DFFAEF',
          '100': '#ACF5DB',
          '200': '#75EDC2',
          '300': '#40E5AB',
          '400': '#1ED695',
          '500': '#14B27C',
          '600': '#13A572',
          '700': '#108F62',
          '800': '#0D7852',
          '900': '#055A3D',
        },
        red: {
          '50': '#FAE9EB',
          '100': '#F4C7CC',
          '200': '#ECA2AA',
          '300': '#E47D89',
          '400': '#DF5F6E',
          '500': '#DC4355',
          '600': '#DA3447',
          '700': '#CE2539',
          '800': '#BB1F30',
          '900': '#9C1927',
        },
        yellow: {
          '50': '#FDF9E9',
          '100': '#FCF0C8',
          '200': '#FAE5A4',
          '300': '#F6DA81',
          '400': '#F4D263',
          '500': '#F6CD43',
          '600': '#F6C937',
          '700': '#F5C320',
          '800': '#F1BA09',
          '900': '#CFA106',
        },
        orange: {
          '50': '#FCF1E7',
          '100': '#FBDBC0',
          '200': '#F7C397',
          '300': '#F3AC6E',
          '400': '#F2994C',
          '500': '#F3882B',
          '600': '#F27F1C',
          '700': '#E6710E',
          '800': '#CF660B',
          '900': '#AC5509',
        },
        dark: {
          '50': '#DFDFF1',
          '200': '#F8F9FC',
          '300': '#E8EAEE',
          '400': '#C3C5CB',
          '500': '#8F96AC',
          '600': '#40444F',
          '700': '#2C2F36',
          '800': '#212429',
          '900': '#061024',
        },
        neutral: {
          '100': '#F7F7F8',
          '200': '#F9FAFB',
          '300': '#F7F7F8',
          '400': '#E7E9EE',
          '500': '#CFD4DD',
          '600': '#A4AEC0',
          '700': '#6b7280',
          '800': '#545461',
          '900': '#061024',
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '18px' }],
        sm: ['0.875rem', { lineHeight: '21px' }],
        base: ['1rem', { lineHeight: '24px' }],
        lg: ['1.125rem', { lineHeight: '27px' }],
        xl: ['1.25rem', { lineHeight: '30px' }],
        '2xl': ['1.5rem', { lineHeight: '36px' }],
        '3xl': ['1.875rem', { lineHeight: '45px' }],
        '4xl': ['2.25rem', { lineHeight: '54px' }],
        '5xl': ['3rem', { lineHeight: '72px' }],
        '6xl': ['4rem', { lineHeight: '96px' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}

export default config
