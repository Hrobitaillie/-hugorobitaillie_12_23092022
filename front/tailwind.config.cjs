/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'header' : '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      height:{
        'pageContent' : 'calc(100% - 93px)'
      },
      colors:{
        'SportSeeRed' : '#FF0101'
      }
      
    },
    // defines all the project breakpoints
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px'
    }
  },
  plugins: [],
}
