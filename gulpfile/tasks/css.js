var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    stylus       = require('gulp-stylus'),
    sourcemaps   = require('gulp-sourcemaps'),
    handleErrors = require('../lib/handleErrors'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS    = require('gulp-minify-css'),
    map          = require('map-stream'),
    config       = require('../config').CSS;

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
  console.log('Processing CSS...');
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