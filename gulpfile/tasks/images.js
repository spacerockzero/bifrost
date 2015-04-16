module.exports = (function(){

  var browserSync    = require('browser-sync'),
      gutil          = require('gulp-util'),
      newer          = require('gulp-newer'),
      gulp           = require('gulp'),
      imagemin       = require('gulp-imagemin'),
      pngquant       = require('imagemin-pngquant'),
      path           = require('path'),
      gulpif         = require('gulp-if'),
      tap            = require('gulp-tap'),
      map            = require('map-stream'),
      addsrc         = require('gulp-add-src'),
      rename         = require('gulp-rename'),
      jpegRecompress = require('imagemin-jpeg-recompress'),
      webp           = require('gulp-webp'),
      clone          = require('gulp-clone'),
      config         = require('../config').IMG;

  var cloneSink = clone.sink();

  // imagemin config:
  var minConfig = {
    progressive: true, // jpgs only
    interlaced: true,  // gifs only
    multipass: true,   // svgs only
    optimizationLevel: 7,

    svgoPlugins: [
      // the following are the svgo defaults: https://github.com/svg/svgo/blob/master/.svgo.yml
      // { removeDoctype: false },
      // { removeXMLProcInst: false },
      // { removeComments: false },
      // { removeMetadata: false },
      // { removeEditorsNSData: false },
      // { cleanupAttrs: false },
      // { convertStyleToAttrs: false },
      { cleanupIDs: false }, // when this is true, 4.svg (camera) shows as solid black (error)
      // { removeRasterImages: false },
      // { removeUselessDefs: false },
      // { cleanupNumericValues: false },
      // { cleanupListOfValues: false },
      // { convertColors: false },
      // { removeUnknownsAndDefaults: false },
      // { removeNonInheritableGroupAttrs: false },
      // { removeUselessStrokeAndFill: false },
      // { removeViewBox: false },
      // { cleanupEnableBackground: false },
      // { removeHiddenElems: false },
      // { removeEmptyText: false },
      // { convertShapeToPath: false },
      // { moveElemsAttrsToGroup: false },
      // { moveGroupAttrsToElems: false },
      // { collapseGroups: false },
      // { convertPathData: false },
      // { convertTransform: false },
      // { removeEmptyAttrs: false },
      // { removeEmptyContainers: false },
      // { mergePaths: false },
      // { removeUnusedNS: false },
      // { transformsWithOnePath: false },
      // { sortAttrs: false },
      // { removeTitle: false },
      // { removeDesc: false }
    ],
    use: [
      pngquant(),
      jpegRecompress({
        accurate: true,
        loops: 1,
        // loops: 1,
        // method below here from https://github.com/danielgtaylor/jpeg-archive#image-comparison-metrics
        // will affect filesize, quality, and processing speed
        // let apps configure this to emphasize their priorities?
        // original test imgs: a:399KB, b:4.2MB
        // method: 'mpe'     // a:150K, b:429K
        method: 'ssim'    // a:150K, b:383K
        // method: 'ms-ssim' // a:150K , b:383K  //slowest
        // method: 'smallfry' // a:150K , b:383K //patent issue?
      })
    ]
  };


  var exts = '';

  // map exts into the minimatch format
  config.EXT.map(function(ext,index,arr){
    exts += ext;
    if(index !== arr.length-1){
      exts += '|';
    }
  });


  // paths
  var imgSrc = [config.SRC + '/**'];
  var webpSrc = [config.SRC + '/**/*.*+(png|PNG|jpg|JPG|jpeg|JPEG)'];
  var imgDest = config.DIST;


  // utils
  // regex for finding -raw substring in filenames
  var patternRaw = new RegExp('-raw','g');
  // logging helper
  var log = function(file,cb) {
    gutil.log(gutil.colors.blue('IMG: currently processing:',file.path));
    cb(null, file);
  }
  var isRaw = function(file){
    // console.log('file.path',file.path);
    return path.basename(file.path).indexOf('-raw') > -1;
  };


  console.log('IMG src', imgSrc);

  // webp gulp task, to make webp copies of all compatible (png,jpg) img files
  // research note: the webps made from jpgs are comparable in size to the hardest crunched jpgs,
  // though image quality is higer and compression time is much faster with the webp files.
  // we may consider this task behind an experiment, so that apps only pay the processing cost if they
  // will also be requesting webp images on their live prod apps
  gulp.task('webp', ['clean'], function(){
    gutil.log(gutil.colors.blue("Processing webp..."));
    return gulp.src( webpSrc, { matchBase: true } )
      .pipe( webp() )    // create webp versions of images
      .pipe( gulpif( isRaw, rename(function(path){
        path.basename = path.basename.replace(patternRaw,'-opt');
      })))
      .pipe( map(log) ) // log files going to dist
      .pipe( gulp.dest( imgDest ) );
  });


  // main img gulp task
  gulp.task('img', ['clean'], function() {
    gutil.log(gutil.colors.blue('Processing Images...'));
    // start with all files
    return gulp.src( imgSrc, { matchBase: true } )
      // if files have "-raw" in filename, optimize them
      .pipe( gulpif( isRaw, imagemin(minConfig) ) )
      // change raw filenames to show they've been optimized
      .pipe( gulpif( isRaw, rename(function(path){
        path.basename = path.basename.replace(patternRaw,'-opt');
      })))
      .pipe( map(log) ) // log files going to dist
      .pipe( gulp.dest( imgDest ) );
  });

})();
