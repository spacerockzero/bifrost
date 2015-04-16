module.exports = (function(){

  var gulp         = require('gulp'),
      gutil        = require('gulp-util'),
      s3           = require('gulp-s3'),
      config       = require('../config'),
      handleErrors = require('../lib/handleErrors');



  var aws = {}
  aws.key = process.env.S3_KEY;
  aws.secret = process.env.S3_SECRET;
  aws.bucket = process.env.S3_BUCKET;
  //aws.region = process.env.S3_REGION;
  // console.log('aws',aws);

  var options = {
    headers: {'Cache-Control': 'max-age=315360000, public'}
  };

  var src = config.CDNASSETS + '/**';
  // console.log('src',src);

  gulp.task('upload', ['precompile','manifest'], function(){
  // gulp.task('upload', function(){
  gutil.log(gutil.colors.blue('Uploading assets...'));
    gulp.src(src)
      .pipe(s3(aws, options))
      .on('error', handleErrors);
  });

})();
