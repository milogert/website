// eslint-disable-next-line @typescript-eslint/no-var-requires
const srcery = require('@srcery-colors/srcery-palette')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors')

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        esther: 'rgb(var(--color-esther) / <alpha-value>)',
        maximus: 'rgb(var(--color-maximus) / <alpha-value>)',
        linx: 'rgb(var(--color-linx) / <alpha-value>)',
      },
    },
  },
  plugins: [
    createThemes({
      srcery: {
        brand: srcery.primary.black.hex,
        primary: srcery.primary.bright_white.hex,
        secondary: srcery.secondary.xgray12.hex,
        link: srcery.primary.blue.hex,
        nav: srcery.primary.yellow.hex,
        active: srcery.primary.green.hex,
        hover: srcery.primary.cyan.hex,
        error: srcery.primary.red.hex,
        'error-border': srcery.primary.bright_red.hex,
      },
      srceryLight: {
        brand: srcery.primary.bright_white.hex,
        primary: srcery.primary.black.hex,
        secondary: srcery.secondary.xgray6.hex,
        link: srcery.primary.blue.hex,
        nav: srcery.secondary.bright_orange.hex,
        active: srcery.primary.green.hex,
        hover: srcery.primary.cyan.hex,
        error: srcery.primary.bright_red.hex,
        'error-border': srcery.primary.red.hex,
      },
      gruvbox: {
        brand: '#282828',
        primary: '#ebdbb2',
        secondary: '#a89984',
        link: '#458588',
        nav: '#d79921',
        active: '#98971a',
        hover: '#689d6a',
        error: '#cc241d',
        'error-border': '#fb4934',
      },
      gruvboxLight: {
        brand: '#fbf1c7',
        primary: '#3c3836',
        secondary: '#7c6f64',
        link: '#458588',
        nav: '#d79921',
        active: '#98971a',
        hover: '#689d6a',
        error: '#cc241d',
        'error-border': '#fb4934',
      },
      dracula: {
        brand: '#282A36',
        primary: '#F8F8F2',
        secondary: '#6272A4',
        link: '#8BE9FD',
        nav: '#FFB86C',
        active: '#50FA7B',
        hover: '#8BE9FD',
        error: '#FF5555',
        'error-border': '#FF5555',
      },
    }),
  ],
}
