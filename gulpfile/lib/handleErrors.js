var notify = require("gulp-notify");

module.exports = function() {

  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: "[FAILURE] - Compile Error",
    message: "<%= error %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  // this.emit('end');
  // or kill process to exit fast
  process.exit(1);
};
