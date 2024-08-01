/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Nutmeg: "hsl(14, 45%, 36%)",
          DarkRaspberry: "hsl(332, 51%, 32%)",
        },
        neutral: {
          White: "hsl(0, 0%, 100%)",
          RoseWhite: "hsl(330, 100%, 98%)",
          Eggshell: "hsl(30, 54%, 90%)",
          LightGrey: "hsl(30, 18%, 87%)",
          WengeBrown: "hsl(30, 10%, 34%)",
          DarkCharcoal: "hsl(24, 5%, 18%)",
        },
      },
      fontFamily: {
        'young-serif': ['Young Serif', 'sans-serif'], // Match with the font-family in @font-face
        'outfit': ['Outfit', 'sans-serif'], // Match with the font-family in @font-face
      },
      screens: {
        'xs': '375px',
        'xxl': '1440px',
      }
    },
  },
  plugins: [],
}
