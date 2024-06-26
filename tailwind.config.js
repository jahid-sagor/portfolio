/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1520px"
      },
     fontFamily:{
      pop: ["Poppins", "sans-serif"],
     },
  },
},
  plugins: [],
}
