/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/layer-base.png')",
      },
      colors: {
        'white': '#FDF9AE',
        'purple': '#0D1417',
      },
    }
    
  },
  plugins: [],
}

