/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors:{
      'c1': '#252433',
      'c2': '#3A3D4C',
      'c3': '#4F5665',
      'c4': '#646F7E',
      'c5': '#798998',
      'c6': '#8EA2B1',
      'c7': '#A3BBCA',
      'c8': '#B8D4E3',
      'c9': '#C4E4EA',
      'white': '#FFFFFF',
      'black' : '#000000',
    },
    extend: {
    },
  },

  plugins: [],
};

module.exports = config;
