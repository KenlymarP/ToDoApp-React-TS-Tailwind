/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        gradient:
          "linear-gradient(180deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
    },
  },
  plugins: [],
};
