/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        "5xl" : "0px 13px 17px -5px rgba(90,87,87,0.56)",
        "6xl" : "-53px 0px 17px 4px rgba(251,251,251,0.4) inset"
      },
      colors : {
        gray1 : "#e6e6e6"
      }
    },
  },
  plugins: [],
}
