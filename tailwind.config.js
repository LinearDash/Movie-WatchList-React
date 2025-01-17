/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
// import daisyUIThemes from "daisyui/src/theming/themes";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

}

