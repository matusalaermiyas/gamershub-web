/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins"],
      },
      colors: {
        "light-dark": "#06141B",
        "light-color": "#11212D",
        "tourney-color": "#031930",
      },
    },
    // borderRadius: {
    //   mine: "70px",
    // },
  },
  plugins: [],
};
