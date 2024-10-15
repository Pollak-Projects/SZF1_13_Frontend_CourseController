/** @type {import('tailwindcss').Config} */
export default {
  content: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        "primary": "rgb(29 78 216)"
      }
    },
  },
  plugins: [],
 };