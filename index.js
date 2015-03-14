var gulp = require('gulp');
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulpfile/tasks', { recurse: true });

(function(){
  gulp.start('watch');
  console.log('inside devTime()');
})();

// module.exports = {
//   dev: devTime
// }
