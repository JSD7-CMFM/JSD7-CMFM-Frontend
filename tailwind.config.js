/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        trispace: ["Trispace", "sans-serif"],
      },
      keyframes: {
        rightToLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        leftToRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(50%)",
          },
        },
      },
      animation: {
        rightToLeft: "rightToLeft 30s linear infinite",
        leftToRight: "leftToRight 30s linear infinite",
      },
      backgroundImage: {
        'custom-background': "url('/Shiba.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
