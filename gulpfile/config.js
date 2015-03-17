/* ==========================================================================
   BIFROST CONFIG: SET ALL GLOBAL CONFIG AND STATICS HERE
   ========================================================================== */
/* import libs */
var path = require('path');

/* global asset paths */
// console.log('process.env',process.env);
var ROOTDIR = process.env.INIT_CWD;                        // root mount point of app
// var ROOTDIR = path.resolve('/');                        // root mount point of app
console.log('ROOTDIR',ROOTDIR);
var ASSETDIR = path.join(ROOTDIR, 'public');
var DEVASSETS = path.join(ASSETDIR, 'dev');
var DISTASSETS = path.join(ASSETDIR, 'dist');

module.exports = {
  ROOT: ROOTDIR,                                           // app root dir
  ASSETS: ASSETDIR,
  DEVASSETS: DEVASSETS,                                    // dev assets root dir
  DISTASSETS: DISTASSETS,                                  // dist dir where optimized files go to be served
  JS: {
    SRC: path.join(DEVASSETS, 'js'),                       // js and assemblies dir
    EXT: ['js','ts']
  },
  CSS: {                                                   // css, styl, and less files (not used in modules or components)
    SRC: path.join(DEVASSETS, 'css'),
    EXT: ['css','styl','less','sass'],
    DIST: path.join(DISTASSETS, 'css'),
    STYLUS: {

    }
  },
  IMG: {                                                   // image files (svg, jpg, png, gif, webp)
    SRC: path.join(DEVASSETS, 'img'),
    DIST: path.join(DISTASSETS, 'img'),
    EXT: ['gif','png','jpg','jpeg','webp','svg']
  },
  WEBCOMPONENTS: {                                         // webcomponent dirs, ready to be optimized
    SRC: path.join(DEVASSETS, 'webcomponents')
  },
  FONTS: {
    SRC: path.join(DEVASSETS, 'fonts'),                    // webfonts
    EXT: ['woff','woff2','svg','eot','ttf']
  },
  BROWSERSYNC: {
    files: [ DISTASSETS + '**/*.*' ],
    port: "5001",
    proxy: "localhost:5000",
    injectChanges: true,
    open: false
  },
  BROWSERIFY: {
    bundleConfigs: [{
      entries: DEVASSETS + '/js/**/',
      dest: DISTASSETS + '/js',
      outputName: '*'
      // transform: ['babelify'],
      // require: ['lodash']
    }]
  }
};
