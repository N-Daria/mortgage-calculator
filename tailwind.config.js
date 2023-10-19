/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "890px",
      desktop: "1141px",
    },
    extend: {
      colors: {
        themeColor: "#161616",
        yellow: "#FBE54D",
        borderColor: "#333535",
        baseColor: "#2A2B31",
        textColor: "#848484",
        secondaryColor: "#242529",
        accent: "#2D2D2D",
        textDark: "#161616",
      },
      spacing: {
        120: "120px",
        60: "60px",
      },
      maxWidth: {
        mainContentD: "1130px",
        mainContentT: "1018px",
        mainContentM: "350px",
      },
    },
  },
  plugins: [],
};
