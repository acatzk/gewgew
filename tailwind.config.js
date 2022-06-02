const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#9147ff',
        'gray-dim': '#3a3a3d',
        'gray-hover': '#5d5d5f',
        'gray-light': '#5a5a5c',
        'gray-dark': '#464648',
        'gray-darker': '#303032',
        'gray-darkest': "#29292b",
        'dark': '#1f1f23',
        'darker': '#18181b',
        'darkest': '#0e0e10',
        'indigo-dark': '#772ce8',
        'indigo-darkest': '#5c16c5',
        'gray-side-hover': '#26262c',
        'red-online': '#e91916'
      },
    },
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin')
  ],
}
