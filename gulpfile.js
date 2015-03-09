/* stack-level build file */
console.log('inside stack-level build file');

/* do stack things */

// Build Assembly Bundles
// Process Static Assets
// Serve Assets
// Upload Assets

var gulp = require('gulp');
var path = require('path');
var rootDir = process.cwd();

var paths = {
  root: rootDir,
  assets: path.join(rootDir, 'assets'),
  js: path.join(paths.assets, 'js'),
  css: path.join(paths.assets, 'css'),
  img: path.join(paths.assets, 'img')
};















// Import app-level buildfile if exists
var appBuild = false; 
try {
  appBuild = require( process.cwd() + '/build.js' );
}
catch(e){
  console.log('app-level build file not imported: ' + e)
}

/* Run app-level build scripts */
if(appBuild){
  console.log('importing: ' + appBuild.message);
}