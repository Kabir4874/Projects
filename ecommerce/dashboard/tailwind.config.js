/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#161d31",
        light:'#d0d2d6',
        
        blue:{
          base:'#283046',
          600:'#3182ce',
        }
      },
    },
  },
  plugins: [],
};
