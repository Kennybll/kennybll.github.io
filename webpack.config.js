const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const POSTCSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      require('autoprefixer')({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ],
      }),
    ],
  },
};

module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.(css|less)$/i,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            POSTCSS_LOADER,
            {
              loader: 'less-loader',
              options: {
                  javascriptEnabled: true
              },
            },
          ],
        }),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kennybll',
      template: path.resolve(__dirname, 'templates/index.html')
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'style.css',
    }),
  ],
};