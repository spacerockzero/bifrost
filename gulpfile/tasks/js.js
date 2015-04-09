var gulp       = require('gulp'),
    babel      = require('gulp-babel'),
    map        = require('map-stream'),
    sourcemaps = require("gulp-sourcemaps"),
    config     = require('../config').JS;

var exts = '';

// map exts into the minimatch format
config.EXT.map(function(ext,index,arr){
  if(index !== arr.length-1){
    exts += ext+'|';
  }
});


// sources
var jsSrc = [config.SRC + '/**/*.+(' + exts + ')'];
var jsDest = config.DIST;

// utilities
// logging helper
var log = function(file,cb) {
  console.log('IMG: currently processing:',file.path);
  cb(null, file);
};


gulp.task('js', ['clean'], function(){
  return gulp.src(jsSrc)
    .pipe(sourcemaps.init())
    .pipe(babel()) //gulpif?
    // .pipe(typescript()) //gulpif?
    .pipe( map(log) ) // log files going to dist
    .pipe(sourcemaps.write("."))
    .pipe( gulp.dest( jsDest ) );
});