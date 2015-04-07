var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
// var less         = require('gulp-less');
// var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config').CSS;
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');

// module config
var src = config.SRC + '/**/*.{css|styl}';

console.log('css src',src);

// run during devtime
gulp.task('css', function () {
  return gulp.src(src)
    // .pipe(sourcemaps.init())
    // .pipe(stylus(config.STYLUS))
    .on('error', handleErrors)
    // .pipe(minifyCSS())
    // .pipe(sourcemaps.write())// must be after fingerprint, unless done inline
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.DIST));
});

// run before deploy
