const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    navbar: './src/navbar.js',
  }, 
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
      filename: 'index.html',
      chunks: ['index', 'navbar'],
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html', 
      filename: 'about.html',
      chunks: ['navbar']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html', 
      filename: 'projects.html',
      chunks: ['navbar'],
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html', 
      filename: 'contact.html',
      chunks: ['navbar'],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', 
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true
  },
};
