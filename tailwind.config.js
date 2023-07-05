/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/layer-base.png')",
        'hero-front': "url('./images/layer-front.png')",
        'hero-middle': "url('./images/layer-middle.png')",
        'cave-pattern': "url('./images/cave.jpg')",
      },
      colors: {
        'white': '#FDF9AE',
        'purple': '#0D1417',
      },
    }
    
  },
  plugins: [],
}

