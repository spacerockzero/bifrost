module.exports = (function(){

  var browserSync = require('browser-sync');
  var newer = require('gulp-newer');
  var config = require('../config').IMG;
  var gulp = require('gulp');
  var imagemin = require('gulp-imagemin');
  var pngquant = require('imagemin-pngquant');
  var path = require('path');

  // paths
  var imgSrc = config.SRC + '/**/*';
  var imgDest = config.DIST;

  console.log('IMG config', config);

  gulp.task('images', function() {
    return gulp.src(imgSrc)
      .pipe(newer(imgDest))                       // only process newly changed files
      .pipe(imagemin())                           // simple image opto, add more steps later
      .pipe(gulp.dest(imgDest))                   // put optimized imgs in dist dir to serve
      .pipe(browserSync.reload({stream:true}));   // trigger browser reload
  });

})();
