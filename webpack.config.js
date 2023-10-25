const path = require('path');
//we require html plugin so we can add html to app (mpn install it first tho)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  //entry is where webpack starts to build dependency graph
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'src/index.tsx'),
  //output is where Webpack saves our bundle
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new Dotenv(),
  ],

  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
    ],
  },

  devServer: {
    host: 'localhost',
    port: '8080',
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:' + process.env.PORT,
    },
  },
};
