module.exports = {
  content: ['src/**/*.{html,js}'],
  theme: {
    animation: {
      'blink': 'flash 1s step-start infinite',
    },
    keyframes: {
      flash: {
        '50%': { opacity: '0' },
      }
    }
  },
  plugins: [],
}
