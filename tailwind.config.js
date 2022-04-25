module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        maxW: "1374px",
      },
      colors: {
        darkBackground: "#46244C",
        darkCard: "#712B75",
        darkText: "#FFFBE7",
      },
    },
  },
  plugins: [],
};
