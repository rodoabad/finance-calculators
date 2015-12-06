import gulp from 'gulp';
import { Server } from 'karma';
import path from 'path';

const server = new Server({
  configFile: path.resolve('./karma.config.js')
});

gulp.task('karma', () => server.start());
