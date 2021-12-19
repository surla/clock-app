module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "mobile-daytime": "url('public/assets/mobile/bg-image-daytime.jpg')",
        "mobile-nighttime":
          "url('public/assets/mobile/bg-image-nighttime.jpg')",
      },
    },
  },
  plugins: [],
};
