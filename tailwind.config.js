/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [`Inter`, `sans-serif`],
    },
  },
  theme: {
    fontSize: {
      70: "70px",
    },
  },
  extend: {
    colors: {
      herobg: `#F5F5F580`,
    },
  },

  plugins: [],
};
