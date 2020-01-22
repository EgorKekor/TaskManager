const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, 
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"],
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: '../static', to: 'static' },
    ]),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devtool: 'source-map',  // Source map generations
  devServer: {
    https: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    liveReload: true,
    port: 8080,
  }
  // watch: true`
};