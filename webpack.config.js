module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules,
        loader: 'babel',
        query: {
          presets: ['react', 'es-2015']
        }
      }
    ]
  }
}
