var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    // s3           = require('gulp-s3'),
    awspublish   = require('gulp-awspublish'),
    path         = require('path'),
    gulpif       = require('gulp-if'),
    gulpFilter   = require('gulp-filter'),
    parallelize  = require("concurrent-transform"),
    handleErrors = require('../lib/handleErrors'),
    config       = require('../config'),
    handleErrors = require('../lib/handleErrors');






var src = config.CDNASSETS + '/**';
// console.log('src',src);

// option 1: (gulp-s3)
gulp.task('upload', ['precompile','manifest'], function(){
  var aws = {}
  aws.key = process.env.S3_KEY;
  aws.secret = process.env.S3_SECRET;
  aws.bucket = process.env.S3_BUCKET;
  //aws.region = process.env.S3_REGION;
  console.log('aws',aws);
  
  var options = {
    headers: {'Cache-Control': 'max-age=315360000, public'}
  };
  
  gutil.log(gutil.colors.blue('Uploading assets with gulp-s3...'));
  gulp.src(src)
    .pipe(s3(aws, options))
    .on('error', handleErrors);
});




//option 2 (gulp-awspublish)
gulp.task('awspublish', ['precompile','manifest'], function(){
// gulp.task('awspublish', function(){
  var doZip = function(file) {
    // console.log('doZip - file:',file);
    var ext = path.extname(file.path);
    var doGzip = config.GZIP.EXT.indexOf(path.extname(file.path)) !== -1;
    console.log('file.path, ext, doGzip:', file.path, ext, doGzip);
    // console.log('doGzip',doGzip);
    return config.GZIP.EXT.indexOf(path.extname(file.path)) !== -1;
  };

  var publisherOptions = {
    force: true,
    simulate: false,
    createOnly: true
  };

  // The process.env assignments will need foreman running to get their values
  var aws = {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET
  };
  console.log('aws',aws);
  
  // create a new publisher 
  var publisher = awspublish.create(aws,publisherOptions);

  // set headers
  var headers = {'Cache-Control': 'max-age=31536000, public'};
  
  
  gutil.log(gutil.colors.blue('Uploading assets with gulp-awspublish...'));
  gulp.src(src)
    .pipe(gulpif(doZip, awspublish.gzip()))                   // gzip and set headers if needed
    .on('error', handleErrors)
    .pipe(parallelize(publisher.publish(headers),10))         // publish assets to cdn
    .on('error', handleErrors)
    // .pipe(publisher.cache())                               // create a cache file to speed up consecutive uploads (prob won't work in CD deploy pipeline)
    .pipe(awspublish.reporter())                              // print upload updates to console
    .on('error', handleErrors);                               // growl notification of errors
});