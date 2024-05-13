/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        customColor: 'hsl(218, 28%, 13%)',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    // require('autoprefixer'),
  ],
}

