/* browserify task
   ---------------
   Bundle javascripty things with browserify!
   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.
   See browserify.bundleConfigs in gulpfile.js/config.js
*/

var config  = require('../config').BROWSERIFY;
var gulp = require('gulp');
var through = require('through2');
var browserify = require('browserify');
var browserSync  = require('browser-sync');
var watchify = require('watchify');
var transform = require('vinyl-transform');
var path = require('path');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var cache = require('gulp-cached');


var sourceModules = path.join(config.modules.src,'/**/index.js');
var distModules = config.modules.dist;

// console.log('sourceModules',sourceModules);
// console.log('distModules',distModules);

var browserifyTask = function() {
  var browserified = function() {
    return through.obj(function(chunk, enc, callback) {
      if(chunk.isBuffer()) {
        var b = browserify(chunk.path);
        // var b = watchify(chunk.path);
        // Any custom browserify stuff should go here
        b.transform('browserify-css');
        chunk.contents = b.bundle();
        this.push(chunk);
      }
      callback();
    });
  };

  return gulp.src(sourceModules)
    .pipe(plumber())
    // .pipe(cache('browserify'))
    .pipe(browserified())
    .pipe(rename(function(path){
      // remove the dir wrapper from the output file
      // console.log('path',path);
      // console.log('newPath:',path.dirname + path.extname);
      path.basename = path.dirname;
      path.dirname = '';
    }))
    .pipe(gulp.dest(distModules))
    .pipe(browserSync.reload({
      stream: true
    }));
};

// export this task, so watchify can call it during dev time
gulp.task('devtime_browserify', browserifyTask);

// Exporting the task so we can call it directly in our watch task, with the 'watch' option
module.exports = browserifyTask;