const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
    './src/application.jsx'
  ],
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '../', 'assets', 'javascripts'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3001/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/,  loader: 'style!css'},
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.gif$/,  loader: 'url-loader?mimetype=image/png' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=[name].[ext]' }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
   }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  watchOptions:{
    aggregateTimeout: 100
  }
};
