module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      }
    }
  },
  variants: {},
  plugins: [],
}

