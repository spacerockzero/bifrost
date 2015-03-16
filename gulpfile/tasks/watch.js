module.exports = (function(){

  var gulp   = require('gulp');
  var config = require('../config');
  var watch  = require('gulp-watch');

  // watch for changes on static assets
  gulp.task('watch',['browserSync'], function(callback) {
    watch(config.CSS.SRC, function() { gulp.start('css'); });
    watch(config.IMG.SRC, function() { gulp.start('images'); });
  });

})();
