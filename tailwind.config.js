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
        // Left over room for image if added later
        requestList: "0.25fr 0.50fr 0.50fr 0.15fr",
        requestTemplate: "7rem 24rem 25rem 12rem",
      },
      colors: {
        "crayola-blue": "#1d81fa",
        "darker-blue": "#145aaf",
        "darker-white": "#dbdbdb",
        "greyish-white": "#e7e7e7",
        "anti-flash-white": "#f2f2f2",
        "light-anti-flash-white": "#f8f8f8",
        "maya-blue": "#5bc9f9",
      },
    },
  },
  plugins: [],
};
