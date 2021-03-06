'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
  context: path.resolve(__dirname, '.'),
  entry: {
    main: [
      'webpack-hot-middleware/client',
      './src/main.jsx'
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [

      {test: /\.scss$/, loaders: ["style", "css", "sass"]},

      {test: /\.(jpe?g|png|gif)$/i, loaders: ['url?limit=8192', 'img']},

      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']}
    ]
  },
  progress: true,
  reslove: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__API_HOST__': JSON.stringify('http://localhost:3000/')
    })
  ]
};

module.exports = config;
