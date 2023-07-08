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
        'devlog-pattern': "url('./images/devlog-base.jpg')",
      },
      colors: {
        'white': '#FDF9AE',
        'purple': '#0D1417',  //tis actually more of a dark navy but I'm too lazy to change the name everywhere -- future task: make components more cohesive by abstraction so don't need to change everywhere
      },
    }

  },
  plugins: [],
}

