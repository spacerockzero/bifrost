/* ==========================================================================
   BIFROST CONFIG: SET ALL GLOBAL CONFIG AND STATICS HERE
   ========================================================================== */
/* import libs */
var path = require('path');

module.exports = function(extConfig){
  
  /* global asset paths */
  // console.log('process.env',process.env);
  var ROOTDIR = (extConfig && extConfig.ROOTDIR) ? extConfig.ROOTDIR : process.env.INIT_CWD || '.';  // root mount point of app
  console.log('ROOTDIR',ROOTDIR);
  
  var ASSETDIR = path.join(ROOTDIR, 'public');
  var DEVASSETS = path.join(ASSETDIR, 'dev');
  var DISTASSETS = path.join(ASSETDIR, 'dist');
  var CDNASSETS = path.join(ASSETDIR, 'cdn');

  var defaultConfig = {
    ROOT: ROOTDIR,                                           // app root dir
    ASSETS: ASSETDIR,
    DEVASSETS: DEVASSETS,                                    // dev assets root dir
    DISTASSETS: DISTASSETS,
    CDNASSETS: CDNASSETS,                                    // dist dir where optimized files go to be served
    GZIP: {
      EXT: ['.js','.JS','.css','.CSS','.html','.HTML','.svg','.SVG']  // file extensions that we DO want to gzip on deploy, with each case considered
    },
    JS: {
      SRC: path.join(DEVASSETS, 'js'),                       // js and assemblies dir
      EXT: ['js'],
      DIST: path.join(DISTASSETS, 'js')
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
      EXT: ['gif','GIF','png','PNG','jpg','JPG','jpeg','JPEG','webp','WEBP','svg','SVG']
    },
    WEBCOMPONENTS: {                                         // webcomponent dirs, ready to be optimized
      SRC: path.join(DEVASSETS, 'webcomponents')
    },
    FONTS: {
      SRC: path.join(DEVASSETS, 'fonts'),                    // webfonts
      EXT: ['woff','woff2','svg','eot','ttf']
    },
    MODULES: {
      SRC: DEVASSETS + '/js/modules/'
    }
  };

  return defaultConfig;
}
