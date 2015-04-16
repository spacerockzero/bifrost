// Pre-compile assets before deploy
// If localProdMode === on, should emulate processed assets locally
var gulp = require('gulp');

// clean
// css
// img
// js (non-module)
// fonts
// modules (assemblies)
// TBD: modules (browserify) (auto-detect config?)
// TBD: modules (webpack) (auto-detect config?)
// webcomponents

// gulp run-sequence needed here?
gulp.task('precompileAssets',
  [
    'clean',
    'css',
    'img',
    'js',
    // 'fonts',
    // 'assemblies',
    // 'webcomponents'
  ]);