var requireDir = require('require-dir');

console.log('inside bifrost gulpfile');

// Require all tasks in gulp/tasks, including subfolders
var tasks = requireDir('./gulpfile/tasks', { recurse: true });