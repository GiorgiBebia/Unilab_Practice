/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SFProDisplay: ["SF Pro Display", "sans-serif"],
        notoSans: ["Noto Sans Georgian", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      mobile: { max: "414px" },
    },
  },
  plugins: [],
};
