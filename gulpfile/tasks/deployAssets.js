var gulp   = require('gulp'),
    s3     = require('gulp-s3'),
    config = require('../config');
    
    
var aws = {}
aws.key = process.env.S3_KEY;
aws.secret = process.env.S3_SECRET;
aws.bucket = process.env.S3_BUCKET;
aws.region = process.env.S3_REGION;

var options = {
  headers: {'Cache-Control': 'max-age=315360000, public'}
};


gulp.task('uploadToS3',function(){
  gulp.src(config.DISTASSETS+'/**')
    .pipe(s3(aws, options));
});