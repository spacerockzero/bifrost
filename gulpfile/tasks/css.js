var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var stylus         = require('gulp-stylus');
// var less         = require('gulp-less');
// var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config').CSS;
var autoprefixer = require('gulp-autoprefixer');

console.log('css dist path',config.DIST);

// run during devtime
gulp.task('devtime_css', function () {
  return gulp.src(config.SRC)
    .pipe(sourcemaps.init())
    .pipe(stylus(config.STYLUS))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.DIST))
    .pipe(browserSync.reload( {stream: true} ));
});

// run before deploy
