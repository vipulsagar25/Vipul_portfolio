/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a", // The main background color
        card: "#1e293b", // The card background
        primary: "#38bdf8", // The blue accent color
        text: "#f8fafc",
        muted: "#94a3b8"
      }
    },
  },
  plugins: [],
}