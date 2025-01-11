/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import daisyUIThemes from "daisyui/src/theming/themes";
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
  daisyui: {
    themes: [
      "light",
      {
        black: {
          ...daisyUIThemes["black"],
          primary: "rgb(29, 155, 240)",
          secondary: "rgb(24, 24, 24)",
        },
      },
      {
        coffee: {
          ...daisyUIThemes["coffee"],
          primary: "#D1BFA7",
          secondary: "#3E2723",
        },
      },
    ],
  },
}

