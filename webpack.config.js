const path = require('path');
//we require html plugin so we can add html to app (mpn install it first tho)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
process.env.NODE_ENV = 'development';

module.exports = {
  //entry is where webpack starts to build dependency graph
  entry: './src/index.js',
  //output is where Webpack saves our bundle
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js', //[name] grabs from the entry obj
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new Dotenv(),
  ],

  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: ['file-loader'],
      },
    ],
  },

  devServer: {
    host: 'localhost',
    port: '8080',
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: 'build',
    },
    proxy: {
      '/api': 'http://localhost:'+ process.env.PORT,
    },
  },
};
