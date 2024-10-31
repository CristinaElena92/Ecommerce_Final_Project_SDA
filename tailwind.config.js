/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
       
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
      },
      height: {
        'screen-90': 'calc(100vh - 90px)',
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
    },
  },
  screens: {
    
    
    
  },
  plugins: [],
}
