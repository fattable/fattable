var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-closure-compiler': 'closure'
  }
});

/* npm install -g gulp coffee-script */
/* npm install --save-dev gulp coffee-script */
/* http://thibaudb.com/starting-with-gulp-coffeescript */

gulp.task('coffee', function() {
  return gulp.src('./src/*.coffee')
  .pipe($.coffee())
  .pipe(gulp.dest('.'));
});

gulp.task('default', ['coffee'], function() {
  return gulp.src('fattable.js')
    .pipe($.closure({
      compilerPath: 'bower_components/closure-compiler/lib/vendor/compiler.jar',
      fileName: 'fattable.min.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
      },
    }))
    .pipe(gulp.dest('.'));
});