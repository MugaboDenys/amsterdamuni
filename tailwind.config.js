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
        "6xl" : "-53px 0px 17px 4px rgba(251,251,251,0.4) inset",
        mini: "0 0 10px rgb(0 0 0 / 15%)",
        small: "0 2px 10px rgb(0 0 0 / 15%)",
      },
      colors : {
        gray1 : "#e6e6e6",
        gray2 : "#f5f5f5",
        black2 : "#1f1d20"
      }
    },
  },
  plugins: [],
}
