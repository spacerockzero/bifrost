var gulp = require('gulp');
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
var tasks = requireDir('./gulpfile/tasks', { recurse: true });
