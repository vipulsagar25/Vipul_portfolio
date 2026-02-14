/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['"Roboto Flex"', 'sans-serif'],
      },
      colors: {
        primary: "#00F050",
        dark: "#0a0a0a",
        card: "#151515",
        textPrimary: "#f5f5f5",
        muted: "#9CA3AF"
      }
    },
  },
  plugins: [],
}