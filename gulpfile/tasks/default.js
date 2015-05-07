var gulp = require('gulp');

// upload task also runs all prcompile tasks before uploading
gulp.task('default',['upload'],function(){
  console.log('RUNNING: aws publish, including its dependent tasks first...');
})