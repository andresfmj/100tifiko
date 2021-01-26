const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/styles/styles.css',
          to: ''
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public/index.html'),
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ]
}
