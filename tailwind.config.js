/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#260089",
        second : "#614D7C",
        third : "#FF6D47",
        four:"#FFB544",
        five:"#DF0E5E",
        six: "#040718"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}