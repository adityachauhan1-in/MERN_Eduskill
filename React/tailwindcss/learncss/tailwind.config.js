/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'brand-primary': '#6366F1',
        'brand-secondary': '#F472B6',
      },
    },
  },
  plugins: [],
}