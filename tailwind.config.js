/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['Bangers', 'cursive'], // Add your custom font here
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(161.39deg, #F7DF11 -0.34%, #FF009D 87.4%)',
      },
    },
  },
  plugins: [],
}

