/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-color': '#ffb30e', // Custom yellow color
        'orange-color': '#f17228', // Custom orange color
      },
    },
  },
  plugins: [],
}
