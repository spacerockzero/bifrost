var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
// var less         = require('gulp-less');
// var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config').CSS;
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var map          = require('map-stream');

// module config
var src = config.SRC + '/**/*.+(css|styl)';

// logging helper
var log = function(file,cb) {
  console.log('CSS: currently processing:',file.path);
  cb(null, file);
}

// console.log('css src',src);

// run during devtime, must be cleaned first
gulp.task('css',['clean'], function () {
  return gulp.src(src)
    .pipe(map(log))
    // .pipe(sourcemaps.init())
    .pipe(stylus(config.STYLUS))
    .on('error', handleErrors)
    .pipe(minifyCSS())
    // .pipe(sourcemaps.write()) // must be after fingerprint, unless done inline, which has bad effect on filesize
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.DIST,{ overwrite:true }));
});

// run before deploy
