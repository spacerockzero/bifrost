module.exports = (function(){

  var gulp         = require('gulp'),
      gutil        = require('gulp-util'),
      RevAll       = require('gulp-rev-all'),
      path         = require('path'),
      handleErrors = require('../lib/handleErrors'),
      config       = require('../config');

  // config
  var revConfig = {
    hashLength: 4
  };

  gulp.task('manifest', ['precompile'], function(){
    gutil.log(gutil.colors.blue('Building asset manifest...'));
    var revAll = new RevAll();
    return gulp.src(config.DISTASSETS+'/**/*.*')
      .pipe(revAll.revision())
      .on('error', handleErrors)
      .pipe(gulp.dest(path.join(config.ASSETS,'cdn')))
      .pipe(revAll.manifestFile())
      .pipe(gulp.dest(path.join(config.ASSETS,'cdn')));
  });

})();
