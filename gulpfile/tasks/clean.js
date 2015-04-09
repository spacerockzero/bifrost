var gulp   = require('gulp');
var clean  = require('gulp-clean');
var config = require('../config');

// delete all distribution assets
gulp.task('clean', function (cb) {
  return gulp.src(config.DISTASSETS)
    .pipe(clean({ force:true }));
});
