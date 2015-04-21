var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    clean  = require('gulp-clean'),
    config = require('../config');

// delete all distribution assets
gulp.task('clean', function (cb) {
  gutil.log(gutil.colors.blue('Cleaning asset dirs...'));
  return gulp.src([config.DISTASSETS,config.CDNASSETS])
    .pipe(clean({ force:true }));
});