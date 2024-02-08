/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        city1: "url('/src/assets/city1.png')",
        city2: "url('/src/assets/city2.png')",
        city3: "url('/src/assets/city3.png')",
        planet1: "url('/src/assets/planet1.png')",
      },
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  // content: {
  //   relative: true,
  //   transform: (content) => content.replace(/taos:/g, ""),
  //   files: ["./src/*.{html,js}"],
  // },
};
