module.exports = {
  module: {
    loaders: [
      {
        // this allows us to @import from ./style.css
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css?modules']
      },
      {
        // this ensures url() syntax does not get processed
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style', 'css?-url']
      }
    ]
  }
}
