/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        star: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      screens: {
        lg: { max: "1280px" },
        md: { max: "767px" },
        sm: { min: "240px", max: "639px" },
      },
    },
  },
  plugins: [],
};
