/* stack-level build file */
console.log('inside stack-level build file');

/* do stack things */


var stackGulp = require('gulp');
var path = require('path');
var ROOTDIR = process.cwd();
var $ = require('gulp-load-plugins')();
var uglify = require('gulp-uglifyjs');

/* global asset paths */
var ASSETDIR = path.join(ROOTDIR, 'assets');
var PATHS = {
  ROOT: ROOTDIR,                                           // app root dir
  ASSETS: ASSETDIR,                                        // assets root dir
  JS: path.join(ASSETDIR, 'js'),                           // js and assemblies dir
  CSS: path.join(ASSETDIR, 'css'),                         // css, styl, and less files (not used in modules or components)
  IMG: path.join(ASSETDIR, 'img'),                         // image files (svg, jpg, png, gif, webp)
  WEBCOMPONENTS: path.join(ASSETDIR, 'webcomponents'),     // webcomponent dirs, ready to be optimized
  FONTS: path.join(ASSETDIR, 'fonts'),                     // webfonts
  DIST: path.join(ASSETDIR, 'dist')                        // dist dir where optimized files go to be served
};

console.log('ROOTDIR',ROOTDIR);
// Build Assembly Bundles
// Process Static Assets
console.log('JS dir: ', PATHS.JS + '/**/*.js')
stackGulp.task('js', function() {
  return stackGulp.src(PATHS.JS + '/**/*.js')
    .pipe(uglify())
    .pipe(stackGulp.dest(PATHS.DIST))
});
stackGulp.task('css', function() {

});
stackGulp.task('img', function() {

});
stackGulp.task('webcomponents', function() {

});
stackGulp.task('fonts', function() {

});


// Serve Assets (middleware)
// Upload Assets 














// // Import app-level buildfile if exists
// var appBuild = false; 
// try {
//   appBuild = require( process.cwd() + '/build.js' );
// }
// catch(e){
//   console.log('app-level build file not imported: ' + e)
// }

// /* Run app-level build scripts */
// if(appBuild){
//   console.log('importing: ' + appBuild.message);
// }

/* stackGulp Default Task */
stackGulp.task('stack-default', ['js'], function(cb) {

});


module.exports = {
  gulp: stackGulp
}







