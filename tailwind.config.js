/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#222831",
        primary: "#393E46",
        secondary: "#00ADB5",
        accent: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
