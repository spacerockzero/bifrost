var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    handleErrors = require('../lib/handleErrors'),
    config       = require('../config').JS,
    path         = require('path'),
    babel        = require('gulp-babel'),
    ts           = require('gulp-typescript'),
    map          = require('map-stream'),
    sourcemaps   = require("gulp-sourcemaps"),
    gulpif       = require('gulp-if'),
    uglify       = require('gulp-uglifyjs'),
    rename       = require('gulp-rename'),
    // plumber      = require('gulp-plumber'),
    jshint       = require('gulp-jshint'),
    stylish      = require('jshint-stylish');

var exts = '';

// configs
// map exts into the minimatch format
config.EXT.map(function(ext,index,arr){
  exts += ext;
  if(index !== arr.length-1){
    exts += '|';
  }
});

var tsConfig = {
  declarationFiles: false,
  noExternalResolve: true
};

// sources
var jsSrc = config.SRC + '/**/*.+(' + exts + ')',
    tsSrc = config.SRC + '/**/*.ts',
    jsDest = config.DIST;

// utilities
// logging helper
var log = function(file,cb) {
  gutil.log(gutil.colors.blue('JS: currently processing:',file.path));
  cb(null, file);
};

// Typescript processing
gulp.task('typescript', ['clean'], function(){
  var tsResult = gulp.src(tsSrc)
    .pipe(sourcemaps.init())
    .pipe(ts(tsConfig));

  return tsResult.js
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(map(log)) // log files going to dist
    .pipe(gulp.dest(jsDest));
});


// JS processing
gulp.task('js', ['clean','typescript'], function(){
  return gulp.src(jsSrc)
    // .pipe(plumber, {
    //   errorHandler: handleErrors
    // })
    
    // .pipe(jshint)
    // .pipe(jshint.reporter, stylish)
    // .pipe(jshint.reporter, 'fail')
    
    .pipe(sourcemaps.init())
    .on('error', handleErrors)
    
    .pipe( babel() ) //gulpif on -es6 suffix? change suffix to es5 when done?
    .on('error', handleErrors)
    
    .pipe(map(log)) // log files going to dist
    .pipe(sourcemaps.write()) // if you don't pass a relative location string to this, it writes it inline on the output file
    .on('error', handleErrors)
    
    .pipe(gulp.dest( jsDest )) // output the pre-uglified js files
    .on('error', handleErrors)
    
    .pipe(uglify())
    .on('error', handleErrors)
    
    .pipe(rename(function(path){
      // add a .min to filename
      path.suffix += '.min';
    }))
    .on('error', handleErrors)
    
    .pipe(gulp.dest( jsDest ))
    .on('error', handleErrors);
});