/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jaguar: "#030211",
        boulder: "#7C7C7C",
        boulder2: "#767676",
        silver: "#C1C1C1",
        tarawera: "#08364A",
        mercury: "#E9E9E9",
        alto: "#CECECE",
        alto2: "#e0e0e0",
        alto3: "#D3D3D3",
        codGray: "#0D0D0D",
        pampas:'#F4F2F0',
        gallery:'#EFEFEF',
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
  },
  plugins: [],
};
