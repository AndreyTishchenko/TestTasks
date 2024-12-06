const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    page2: './src/js/gifts.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/icons/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font file types
        type: 'asset/resource', // Webpack 5 built-in asset module
        generator: {
          filename: 'assets/fonts/[name][ext]', // Output fonts to 'assets/fonts' folder
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'gifts.html',
      template: './src/gifts.html',
      chunks: ['page2'],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
};
