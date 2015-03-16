var gulp           = require('gulp');
// var browserifyTask = require('./browserify');//not ready yet

gulp.task('watchify', function(callback) {
  // Start browserify task with devMode === true
  browserifyTask(callback, true);
});
