module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        nav: "0.1fr 1fr 0.25fr",
      },
      gridTemplateRows: {
        nav: "7vh",
        howitworks: "5vh 25vh",
        tips: "5vh 20vh",
      },
      colors: {
        "crayola-blue": "#1d81fa",
        "darker-blue": "#145aaf",
        "greyish-white": "#e7e7e7",
        "anti-flash-white": "#f2f2f2",
        "maya-blue": "#5bc9f9",
      },
    },
  },
  plugins: [],
};