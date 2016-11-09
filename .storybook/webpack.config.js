var StringReplacePlugin = require('string-replace-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        // this allows us to @import from ./style.css
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css?modules']
      },
      // ignore css url() syntax
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style', 'css?-url']
      },
      // fix url() to use correct relative paths
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: StringReplacePlugin.replace({
          replacements: [{
            pattern: /url\(".\/..\/themes/g,
            replacement: function(match, p1, offset, string) {
              return 'url("./public/themes'
            }
          }]
        })
      }
    ]
  },
  plugins: [new StringReplacePlugin()]
}
