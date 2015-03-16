var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').BROWSERSYNC;

gulp.task('browserSync', function() {
  browserSync(config);
});
