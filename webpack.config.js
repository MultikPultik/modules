const { resolve } = require('path'); // 1
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglify-js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = { // 1
  entry: './src/main.js', // 2

  output: {
    path: resolve(__dirname, 'production'), // 2
    filename: 'main.[contenthash].js' // 3
  },

  plugins: [
    new CleanWebpackPlugin(), //Плагин предварительной очистки папки

    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    }), // Подключеине HTML

    new MiniCssExtractPlugin({ // 2
      filename: '[name].[contenthash].css' // 3
    }),

    
    //new BundleAnalyzerPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mp3|woff2)$/i,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
};