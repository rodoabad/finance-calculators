import webpack from 'webpack';
import path from 'path';

export const preLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  }
];

export const loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [
      'ng-annotate?single_quotes',
      'babel?cacheDirectory'
    ]
  },
  {
    test: /\.html$/,
    loader: 'html'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }
];

export default {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8000',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'app.js'
  },
  module: {
    preLoaders: preLoaders,
    loaders: loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
