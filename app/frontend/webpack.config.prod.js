const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/application.jsx'
  },
  output: {
    path: path.join(__dirname, '../', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/,  use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] },
      { test: /\.gif$/,  loader: 'url-loader?mimetype=image/png' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ 'React': 'react' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
