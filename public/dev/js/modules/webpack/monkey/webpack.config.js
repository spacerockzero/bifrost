var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    monkey: './index.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("monkey.css", { allChunks: true })
  ]
};