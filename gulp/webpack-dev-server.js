import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from '../webpack.config.js';

gulp.task('webpack-dev-server', (done) => {

  const compiler = webpack(config);

  new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './demo'
  }).listen(8000, 'localhost', () => {

    done();

  });

});
