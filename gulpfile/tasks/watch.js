var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['build', 'watchify', 'browserSync'], function(callback) {
  watch(config.IMG.SRC, function() { gulp.start('images'); });
});