'use strict';

var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');

var config = {
  entry: './src/main.jsx',
  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ["style", "css", "sass"]},

      {test: /\.(jpe?g|png|gif)$/i, loaders: ['url?limit=8192', 'img']},

      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new UglifyJsPlugin({minimize: true}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__API_HOST__': JSON.stringify(process.env.API_HOST)
    })
  ]
};

module.exports = config;
