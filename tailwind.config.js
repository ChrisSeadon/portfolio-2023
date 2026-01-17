/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {

    fontFamily:{
      'sans': 'Oswald',
    },

    extend: {
      fontFamily:{
        'sans': 'Oswald',
      },
      screens:{
        'xs': '0px',
        'sm': '400px',
        '3xl': '3000px',
      },
    },
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ],
}
