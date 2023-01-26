/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#80FFDB",

          secondary: "#55E0A3",

          accent: "#5B70F3",

          neutral: "#191D24",

          "base-100": "#fff",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      // "light",
      // "dark",
    ],
  },
  plugins: [require("daisyui")],
};
