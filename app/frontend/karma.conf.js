const path = require('path');
const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    autoWatch: true,
    frameworks: ['chai', 'mocha', 'sinon'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    webpack: {
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
      },
      module: {
        rules: [
          { test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { babelrc: false, presets: ["es2015", "react", "stage-1"], plugins: ["transform-decorators-legacy"] }
          },
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.css$/,  use: ['style-loader', 'css-loader', 'postcss-loader'] },
          { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
          { test: /\.less$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] },
          { test: /\.gif$/,  loader: 'url-loader?mimetype=image/png' },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=[name].[ext]' }
        ]
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': true,
        'sinon': 'window.sinon'
      },
      plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
          'global.sinon': 'sinon',
          'window.sinon': 'sinon',
          'sinon': 'sinon'
        })
      ]
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    watchOptions: {
      aggregateTimeout: 100
    }
  });
};
