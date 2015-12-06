import { loaders, preLoaders } from './webpack.config.js';

module.exports = function (config) {

  config.set({
    browsers: ['PhantomJS'],
    frameworks: [
      'chai',
      'mocha',
      'sinon'
    ],
    files: [
      'webpack.karma.js'
    ],
    preprocessors: {
      'webpack.karma.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: preLoaders,
        loaders: loaders
      }
    },
    reporters: [
      'dots'
    ],
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    singleRun: true
  });

};
