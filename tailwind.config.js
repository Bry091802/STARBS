/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3932",
        secondary: "#00754A",
        tertiary: "#D4E9E2",
        bk: "#F1F8F5",
      },
      backgroundImage: {
        banner: " url('../img/xl-hero-desktop_2021.jpg')",
        banner1: " url('../img/hero-mobile_2021.jpg')",
      },
    },
  },
  plugins: [],
};
