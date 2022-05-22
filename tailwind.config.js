module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'slide-1': "url('/src/assets/images/slides/slide-1.jpg')",
        'slide-2': "url('/src/assets/images/slides/slide-2.jpg')",
        'slide-3': "url('/src/assets/images/slides/slide-3.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
}
