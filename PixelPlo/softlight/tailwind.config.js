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
        pampas: "#F4F2F0",
        gallery: "#EFEFEF",
        instagram: {
          start: "#f58529", // Orange
          mid: "#dd2a7b", // Pink
          end: "#515bd4", // Purple
        },
        facebook: {
          light: "#3b5998", // Facebook Blue
          dark: "#192f6a", // Darker shade for gradient effect
        },
        twitter: {
          light: "#1DA1F2", // Twitter Blue
          dark: "#0a84c1", // Darker shade for gradient effect
        },
        linkedin: {
          light: "#0077B5", // LinkedIn Blue
          dark: "#005582", // Darker shade for gradient effect
        },
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
  },
  plugins: [],
};
