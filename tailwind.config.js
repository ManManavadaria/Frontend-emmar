module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } , lg: {min: "1050px"}},
    extend: {
      colors: {
        gray: {
          100: "#f6f6f7",
          600: "#727b85",
          900: "#142130",
          "100_00": "#f6f6f700",
        },
        blue_gray: { 100: "#d9d9d9" },
        white: { A700_1e: "#fdfefe1e", A700_01: "#ffffff", A700: "#fdfefe" },
        lime: { 900: "#88530d" },
      },
      fontFamily: { poppins: "Poppins", garamond: "Garamond" },
      backgroundImage: {
        gradient: "linear-gradient(44deg ,#f6f6f7,#f6f6f700)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
