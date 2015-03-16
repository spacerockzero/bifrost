var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

// clean and rebuild distribution assets
gulp.task('build', function(cb) {
  gulpSequence('clean',['images','css'],cb);
});
