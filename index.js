var gulp = require('gulp');
var requireDir = require('require-dir');
var config = require('./gulpfile/config.js')({});


var init = function(config) {

  // Require all tasks in gulp/tasks, including subfolders
  // var tasks = requireDir('./gulpfile/tasks', { recurse: true });
  var css = require('./gulpfile/tasks/css')(config);
  
};

module.exports = init(config);
