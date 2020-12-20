module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'app-pink': '#f7d0be',
      'app-light-grey': '#eeedef',
      'app-dark-grey': '#514c5e',
      'app-orange': '#ec6334',
      'app-yellow': '#fee233',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
