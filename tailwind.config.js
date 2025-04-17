/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderWidth: {
        '3': '3px',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};