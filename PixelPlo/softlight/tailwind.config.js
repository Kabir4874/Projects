/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jaguar: "#030211",
        boulder: "#7C7C7C",
        silver: "#C1C1C1",
        tarawera: "#08364A",
        mercury: "#E9E9E9",
        alto: "#CECECE",
        codGray: "#0D0D0D",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
  },
  plugins: [],
};
