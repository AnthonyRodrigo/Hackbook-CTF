/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xlMax": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xlMax: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgMax: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdMax: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smMax: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        textColor: "#0a0d11",
        redColor: "#bf0000",
      },
      fontFamily:{
        'body':['Inconsolata'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          error: "#bf0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
