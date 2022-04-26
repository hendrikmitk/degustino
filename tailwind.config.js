module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gusti-gray': {
          medium: '#706C7C',
          strong: '#2D3254',
        },
        'gusti-orange': {
          light: '#F7F1F0',
          medium: '#FEDECC',
          strong: '#F67B53',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
