/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'gridSystem': 'repeat(autofill, 300px)'
        }
    }
  },
  plugins: []
}
