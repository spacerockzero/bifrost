module.exports = (function(){

  // Pre-compile assets before deploy
  // If localProdMode === on, should emulate processed assets locally
  var gulp = require('gulp'),
      gutil = require('gulp-util');

  // TBD: modules (browserify) (auto-detect config?)
  // TBD: modules (webpack) (auto-detect config?)

  // gulp run-sequence needed here?
  gulp.task('precompile',
    [
      'clean',
      'css',
      'img',
      'js',
      // 'fonts',
      // 'assemblies',
      // 'webcomponents'
    ], function(){
    gutil.log(gutil.colors.blue('Pre-compiling assets...'));
  });

})();
