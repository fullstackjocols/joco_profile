module.exports = () => ({
  plugins: [
    require('postcss-minify'),
    require('postcss-easy-import'),
    require('autoprefixer'),
    require('tailwindcss'),
  ]
})