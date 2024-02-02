/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinSketch: ['Cabin Sketch', 'sans-serif'],
        monterrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#74795a",
          "secondary": "#9e5d44",
          "accent": "#dbdfd6",
          "neutral": "#f4f4f4",
          "base-100": "#ffffff",
          "info": "#aebdf8",
          "success": "#b6bab0",
          "warning": "#ffffff",
          "error": "#f4cccd",
        },
      },
      {
        myTheme: {
          "primary": "#74795a",
          "secondary": "#9e5d44",
          "accent": "#dbdfd6",
          "neutral": "#f4f4f4",
          "base-100": "#ffffff",
          "info": "#aebdf8",
          "success": "#b6bab0",
          "warning": "#ffffff",
          "error": "#f4cccd",
        },
      }
    ]
  }
}
