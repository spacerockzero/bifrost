module.exports = (function(){

  var gulp = require('gulp');

  // default tasks that should be running as node app is running
  // delete and rebuild dist assets, and then watch for new changes
  // this task will only rebuild on first app boot.
  // when startup reboots app, gulp watchers remain without needing to rebuild
  gulp.task('dev', ['build','watch'], function(){
    console.log('inside stack default task');
  });

})();
