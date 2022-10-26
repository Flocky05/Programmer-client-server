/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fcc7d9",

          "secondary": "#b2d3f7",

          "accent": "#b2210e",

          "neutral": "#171721",

          "base-100": "#FCFCFD",

          "info": "#46A8C3",

          "success": "#40E2A7",

          "warning": "#E29518",

          "error": "#F12513",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
