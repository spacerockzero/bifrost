// // watch for devtime, not for precompile/deploy. not used in current state
// 
// 
// var gulp   = require('gulp');
// var config = require('../config');
// var watch  = require('gulp-watch');
// var path   = require('path');
// var plumber = require('gulp-plumber');
// 
// var browserifyPath = path.join(config.BROWSERIFY.modules.src,'*.*');
// 
// // watch for changes on static assets
// gulp.task('watch',['watchify','browserSync'], function(callback) {
//   // during devtime, only the following tasks should be run:
//   // css: pre-compile, auto-prefix
//   // watch(config.CSS.SRC, function() { gulp.start('devtime_css'); });
//   // js: ES6, TypeScript transpilation
//   // modules (assembly-style): transpile ES6, process down to 1 file, and serve live
//   // modules (webpack or browserify): transpile ES6, process down to 1 file, and serve live
//   console.log('browserify modules watch path',browserifyPath);
//   watch(browserifyPath, function(){
//     console.log('inside browserify watch');
//     gulp.start('watchify');
//   });
//   // watch(config.WEBPACK.SRC, function() { gulp.start('devtime_webpack'); }); // webpack doesn't seem like a good chioce right now
//   // webcomponents: process down to 1 file?
// });


