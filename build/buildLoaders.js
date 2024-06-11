const path = require('path');
const CssMiniExtractPlugin = require('mini-css-extract-plugin');

  module.exports = function buildLoaders(isDev) {
    
    const babelLoader = {
      test: /\.js$/,
      exclude: /node_modules/,
      use : {
          loader: 'babel-loader'
      }
  }
  
  const CSSLoader = {
      test: /\.s[ac]ss$/i,
      use: [
          isDev ? 'style-loader' : CssMiniExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '..', 'postcss.config.js'),
              },
              sourceMap: true,
            }
          },
          "sass-loader"
      ]
  }
  
  const assetLoader = {
      test: /\.(png|jpeg|jpg|gif|svg)$/i,
      type: 'asset/resource'
    }
  
   
    const htmlLoader = {
      test: /\.html$/,
      use: [
        'html-loader'
      ]
    }

     return [
       htmlLoader,
       assetLoader,
       babelLoader,
       CSSLoader,
     ];
  }