module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },

  // When using browserHistory, if you want enter url from the address bar in
  // the browser. Withou 'historyApiFallback', it couldn't jump to that url.
  devServer: {
    inline: true,
    historyApiFallback: true
  }
}
