const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    src:  __dirname + '/src',
  },
  output: {
    path:  __dirname + '/build',
    filename: 'bundle.js',
  },

  module:{
    rules: [
    {
      use: 'babel-loader',
      test: /\.js$/
    },
    {
      loader: ExtractTextPlugin.extract({
        loader: 'css-loader'
      }),
      test: /\.css$/
    }
  ]
  },

  plugins: [
  new ExtractTextPlugin('style.css')
  ]
};
