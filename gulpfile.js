// var requireDir = require('require-dir');
// 
// console.log('inside bifrost gulpfile');
// 
// // Require all tasks in gulp/tasks, including subfolders
// var tasks = requireDir('./gulpfile/tasks', { recurse: true });
var gulp  = require('gulp'),
    mocha = require('gulp-mocha'),
    watch = require('gulp-watch');
    
gulp.task('test', function(){
  return gulp.src('./test/**/*-test.js')
    .pipe(mocha({reporter: 'spec'}));
})

gulp.task('default', function(){
  watch(['./test/**/*-test.js','./gulpfile/**/*','./public/**/*'], function(){
    gulp.start('test');
  })
})

