/* ==========================================================================
   BIFROST CONFIG: SET ALL GLOBAL CONFIG AND STATICS HERE
   ========================================================================== */


/* global asset paths */
var ROOTDIR = process.cwd();
var ASSETDIR = path.join(ROOTDIR, 'assets');
module.exports = {
  ROOT: ROOTDIR,                                           // app root dir
  ASSETS: ASSETDIR,                                        // assets root dir
  JS: {
    SRC: path.join(ASSETDIR, 'js'),                        // js and assemblies dir
    EXT: ['.js','.ts']
  },
  CSS: {                                                   // css, styl, and less files (not used in modules or components)
    SRC: path.join(ASSETDIR, 'css'),
    EXT: ['.css','.styl','.less']
  },
  IMG: {                                                   // image files (svg, jpg, png, gif, webp)
    SRC: path.join(ASSETDIR, 'img'),
    EXT: ['.gif','.png','.jpg','.jpeg','.webp','.svg']
  },
  WEBCOMPONENTS: {                                         // webcomponent dirs, ready to be optimized
    SRC: path.join(ASSETDIR, 'webcomponents')
  },
  FONTS: {
    SRC: path.join(ASSETDIR, 'fonts'),                     // webfonts
    EXT: ['.woff','woff2','.svg','.eot','.ttf']
  },                     
  DIST: path.join(ASSETDIR, 'dist')                        // dist dir where optimized files go to be served
};

console.log('ROOTDIR',ROOTDIR);