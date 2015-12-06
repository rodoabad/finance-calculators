import gulp from 'gulp';
import eslint from 'gulp-eslint';
import friendlyFormatter from 'eslint-friendly-formatter';

const lintSrc = [
  '*.js',
  'gulp/**/*.js',
  'src/**/*.js',
  'test/**/*.js'
];

gulp.task('eslint', () =>
  gulp.src(lintSrc)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failAfterError())
);
