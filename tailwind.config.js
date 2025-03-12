/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EFD09E",
          dark: "#D4AA7D",
        },
        dark: "#272727",
        light: "#FAFAFA"
      }
    },
  },
  plugins: [],
}

