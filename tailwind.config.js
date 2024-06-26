/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Culori principale
        'blue-dark': '#1A365D',
        'gray-dark': '#505050',
        // Culori accent
        'golden': '#FFD700',
        'silver': '#C0C0C0',
        // Alte culori
        // 'navy': {
        //   900: '#001f3f',
        // },
        // 'gray': {
        //   800: '#2c3e50',
        // },
        // 'cerulean': {
        //   600: '#007ba7',
        // },
        // 'gray': {
        //   100: '#f7fafc',
        //   700: '#4a5568',
        // },
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  screens: {
    'xs': '360px',
    'sm': '360px',
    // alte dimensiuni de ecran...
  },
  plugins: [],
}
