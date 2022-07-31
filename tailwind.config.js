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
        background: "#F4F4F4",
        cardBackground: "#0096FF",
        lightText: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
