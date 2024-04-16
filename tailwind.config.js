/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#2F4F4F",
        primary: "#000080",
        secondary: "#FFD700",
        accent: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
