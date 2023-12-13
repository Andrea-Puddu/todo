/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        'base-gray': 'rgb(var(--color-base-gray) / <alpha-value>)',
        'base-black': 'rgb(var(--color-base-black) / <alpha-value>)',

        content: 'rgb(var(--color-content) / <alpha-value>)',
        'content-black': 'rgb(var(--color-content-black) / <alpha-value>)',
        'content-gray': 'rgb(var(--color-content-gray) / <alpha-value>)',
        'content-white': 'rgb(var(--color-content-white) / <alpha-value>)',

        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        'primary-tint': 'rgb(var(--color-primary-tint) / <alpha-value>)',
        'primary-shade': 'rgb(var(--color-primary-shade) / <alpha-value>)',

        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
      },
      fontFamily: {
        font1: ['var(--font-family-font1)', 'sans'],
      },
    },
  },
  plugins: [],
};
