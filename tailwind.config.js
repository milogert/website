module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      }
    }
  },
  plugins: [],
}

