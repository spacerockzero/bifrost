var gulp = require('gulp');

gulp.task('default',['awspublish'],function(){
  console.log('RUNNING: aws publish, including its dependent tasks first...');
})