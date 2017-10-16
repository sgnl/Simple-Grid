module.exports = {
  plugins: [
    require('postcss-node-sass')(),
    require('autoprefixer')(),
    require('cssnano')({
      preset: 'default',
    })
  ]
};