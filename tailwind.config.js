/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./*.{html,js}", "./archive/kernacraft/*"],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: ["winter", "night",
        {
          dreamtheme: {
          "primary": "#0ea5e9",
          "secondary": "#0f766e",
          "accent": "#2563eb",
          "neutral": "#14141f",
          "base-100": "#e0f2fe",
          "info": "#c084fc",
          "success": "#4cebc9",
          "warning": "#fbbf24",
          "error": "#f4678f",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

