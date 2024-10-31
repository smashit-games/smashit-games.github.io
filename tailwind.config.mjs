// /tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        terminal: ['VT323', 'monospace'],
      },
      colors: {
        terminalGreen: '#00FF00',
        darkGreen: '#003300',
        grungeGreen: '#005500',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-min.png')",
      },
    },
  },
  plugins: [],
};
