/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: {
        400: "#C2C2C2",
        500: "#FFF",
        700: "#F5F5F5",
        900: "#868585",
      },
      green: {
        500: "#2DD4BF",
      },
      red: {
        300: "#F87171",
        400: "#FCA5A5",
        500: "#FF0000",
        600: "#DC2626",
      },
      black: {
        400: "#0A0A0A",
        500: "#000",
      },
      primary: {
        500: "#00A0E3",
        600: "#0073A4",
      },
    },
    extend: {},
  },
  plugins: [],
};
