import srcery from '@srcery-colors/srcery-palette'
import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

import { createThemes } from 'tw-colors'

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindAnimate,
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
        nav: srcery.secondary.orange.hex,
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
        nav: '#F1FA8C',
        active: '#50FA7B',
        hover: '#8BE9FD',
        error: '#FF5555',
        'error-border': '#FF5555',
      },
    }),
  ],
} satisfies Config
