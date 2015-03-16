var gulp = require('gulp');
var del = require('del');
var config = require('../config');

// delete all distribution assets
gulp.task('clean', function (cb) {
  del([config.DISTASSETS], { force:true }, cb);
});
