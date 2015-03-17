module.exports = (function(){

  var gulp   = require('gulp');
  var config = require('../config');
  var watch  = require('gulp-watch');

  // watch for changes on static assets
  gulp.task('watch',['browserSync'], function(callback) {
    // during devtime, only the following tasks should be run:
    // css: pre-compile, auto-prefix
    watch(config.CSS.SRC, function() { gulp.start('devtime_css'); });
    // js: ES6, TypeScript transpilation
    // modules (assembly-style): transpile ES6, process down to 1 file, and serve live
    // modules (webpack or browserify): transpile ES6, process down to 1 file, and serve live
    // webcomponents: process down to 1 file?
  });

})();
