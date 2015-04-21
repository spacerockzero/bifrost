// // not currently used in precompile/deploy in current state
// var gulp = require('gulp');
// 
// // default tasks that should be running as node app is running
// // delete and rebuild dev assets, and then watch for new changes
// // this task will only rebuild on first app boot.
// // when startup/nodemon reboots app, gulp watchers will remain without needing to rebuild
// module.exports = gulp.task('devTime', ['devtime_build','watch'], function(){
//   console.log('inside stack dev task');
// });