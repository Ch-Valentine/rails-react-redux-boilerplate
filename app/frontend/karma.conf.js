module.exports = function (config) {
  config.set({
    // browsers: ['Chrome', 'Firefox', 'Safari'], before git pull
    browsers: ['Chrome'],
    // karma only needs to know about the test bundle
    files: [
      'tests.webpack.js'
    ],
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-safari-launcher',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    // reporters: ['mocha'],
    singleRun: false,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: "babel-loader",
            test: /\.js?$/
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      captureConsole: false
    }
  });
};
