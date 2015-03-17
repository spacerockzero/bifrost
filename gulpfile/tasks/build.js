var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

// clean and rebuild distribution assets
gulp.task('devtime_build', function(cb) {
  gulpSequence('clean',['devtime_css'],cb);
});
