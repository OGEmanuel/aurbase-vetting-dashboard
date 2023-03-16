/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      custom: '20px',
      'custom-xs': '4px',
    },
    extend: {
      colors: {
        'bg-1': 'rgba(255, 255, 255, 0.9)',
        'bg-2': '#FCFBFB',
        secondary: '#FFCA14',
        primary: '#E5E5E5',
        tertiary: 'rgba(58, 58, 58, 0.7)',
        extra: 'rgba(58, 58, 58, 0.3)',
      },
    },
  },
  plugins: [],
};
