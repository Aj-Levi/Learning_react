/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["bumblebee", "synthwave", "cupcake"],
    darkTheme: "synthwave",
  },
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

