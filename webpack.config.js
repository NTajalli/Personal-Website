const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/script.js', // Update with your entry file
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './', 
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html', 
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html', 
      filename: 'projects.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html', 
      filename: 'contact.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', 
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
