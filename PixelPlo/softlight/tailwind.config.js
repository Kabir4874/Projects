/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#030211",
        grey: "#7C7C7C",
        grey_light: "#C1C1C1",
        navColor:'#08364A',
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
  },
  plugins: [],
};
