var gulp         = require('gulp'),
    RevAll       = require('gulp-rev-all'),
    path         = require('path'),
    handleErrors = require('../lib/handleErrors'),
    config       = require('../config');
    
gulp.task('buildManifest', ['precompileAssets'], function(){
  var revAll = new RevAll();
  return gulp.src(config.DISTASSETS+'/**/*.*')
    .pipe(revAll.revision())
    .on('error', handleErrors)
    .pipe(gulp.dest(path.join(config.ASSETS,'cdn')))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest(path.join(config.ASSETS,'cdn')));
});