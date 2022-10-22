/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '539px'},
  
      'hb':{'max':'1024px'},
  
      'lw':{'max':'280px'},
  
      'do':{'max':'820px'},
    },
    extend: {},
  },
  plugins: [],
}
