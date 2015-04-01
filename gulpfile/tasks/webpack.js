// var gulp = require('gulp');
// var webpack = require('webpack');
// var WebpackDevServer = require("webpack-dev-server");
// var path = require('path'),
//     gulp = require('gulp'),
//     flatten = require('gulp-flatten'),
//     rename = require('gulp-rename'),
//     webpack = require('gulp-webpack-build');
// var config = require('../config.js').WEBPACK;


// var src = config.SRC,
//     dest = config.DIST,
//     webpackOptions = {
//         debug: true,
//         devtool: '#source-map',
//         watchDelay: 200
//     },
//     webpackConfig = {
//         useMemoryFs: true,
//         progress: true
//     },
//     CONFIG_FILENAME = 'index.js';
//     // console.log('webpack.config',webpack.config);

// gulp.task('devtime_webpack', [], function() {
//     // console.log('gulp.src: ',path.join(path.join(src, '**', CONFIG_FILENAME)));
//     return gulp.src(path.join(path.join(src, '**', CONFIG_FILENAME)), { base: path.resolve(src) })
//     // return gulp.src(path.join(path.join(src, '**', CONFIG_FILENAME)))
//         .pipe(webpack.configure(webpackConfig))
//         .pipe(webpack.overrides(webpackOptions))
//         .pipe(webpack.compile())
//         .pipe(webpack.format({
//             version: false,
//             timings: true
//         }))
//         .pipe(webpack.failAfter({
//             errors: true,
//             warnings: true
//         }))
//         .pipe(rename(function(path){
//           // remove the dir wrapper from the output file
//           // console.log('path',path);
//           // console.log('newPath:',path.dirname + path.extname);
//           path.basename = path.dirname;
//           path.dirname = '';
//         }))
//         .pipe(flatten())
//         .pipe(gulp.dest(dest));
// });

// gulp.task('watch', function() {
//     gulp.watch(path.join(src, '**/*.*')).on('change', function(event) {
//         if (event.type === 'changed') {
//             gulp.src(event.path, { base: path.resolve(src) })
//                 .pipe(webpack.closest(CONFIG_FILENAME))
//                 .pipe(webpack.configure(webpackConfig))
//                 .pipe(webpack.overrides(webpackOptions))
//                 .pipe(webpack.watch(function(err, stats) {
//                     gulp.src(this.path, { base: this.base })
//                         .pipe(webpack.proxy(err, stats))
//                         .pipe(webpack.format({
//                             verbose: true,
//                             version: false
//                         }))
//                         .pipe(rename(function(path){
//                           // remove the dir wrapper from the output file
//                           // console.log('path',path);
//                           // console.log('newPath:',path.dirname + path.extname);
//                           path.basename = path.dirname;
//                           path.dirname = '';
//                         }))
//                         .pipe(flatten())
//                         .pipe(gulp.dest(dest));
//                 }));
//         }
//     });
// });

// // // temp webpack config
// // webpackConfig = {
// //   SRC: config.SRC,
// //   entry: {
// //     a: "./a"
// //   },
// //   output: {
// //     path: path.join(__dirname, "dist"),
// //     filename: "[name].entry.js"
// //     // publicPath: '/public/dev/'
// //   }
// // };

// // gulp.task("devtime_webpack", function() {
// //   return gulp.src(thisConfig.SRC)
// //     .pipe(webpack({
// //       /* webpack configuration */
// //     }))
// //     .pipe(gulp.dest(config.DIST));
// // });

// // // The development server (the recommended option for development)
// // gulp.task("webpack-default", ["webpack-dev-server"]);

// // // Build and watch cycle (another option for development)
// // // Advantage: No server required, can run app from filesystem
// // // Disadvantage: Requests are not blocked until bundle is available,
// // //               can serve an old app on refresh
// // gulp.task("build-dev", ["webpack:build-dev"], function() {
// //   gulp.watch(["app/**/*"], ["webpack:build-dev"]);
// // });

// // // Production build
// // gulp.task("build", ["webpack:build"]);

// // gulp.task("webpack:build", function(callback) {
// //   // modify some webpack config options
// //   var myConfig = Object.create(webpackConfig);
// //   myConfig.plugins = myConfig.plugins.concat(
// //     new webpack.DefinePlugin({
// //       "process.env": {
// //         // This has effect on the react lib size
// //         "NODE_ENV": JSON.stringify("production")
// //       }
// //     }),
// //     new webpack.optimize.DedupePlugin(),
// //     new webpack.optimize.UglifyJsPlugin()
// //   );

// //   // run webpack
// //   webpack(myConfig, function(err, stats) {
// //     if(err) throw new gutil.PluginError("webpack:build", err);
// //     gutil.log("[webpack:build]", stats.toString({
// //       colors: true
// //     }));
// //     callback();
// //   });
// // });

// // // modify some webpack config options
// // var myDevConfig = Object.create(webpackConfig);
// // myDevConfig.devtool = "sourcemap";
// // myDevConfig.debug = true;

// // // create a single instance of the compiler to allow caching
// // var devCompiler = webpack(myDevConfig);

// // gulp.task("webpack:build-dev", function(callback) {
// //   // run webpack
// //   devCompiler.run(function(err, stats) {
// //     if(err) throw new gutil.PluginError("webpack:build-dev", err);
// //     gutil.log("[webpack:build-dev]", stats.toString({
// //       colors: true
// //     }));
// //     callback();
// //   });
// // });

// // gulp.task("webpack-dev-server", function(callback) {
// //   // modify some webpack config options
// //   var myConfig = Object.create(webpackConfig);
// //   myConfig.devtool = "eval";
// //   myConfig.debug = true;

// //   // Start a webpack-dev-server
// //   new WebpackDevServer(webpack(myConfig), {
// //     publicPath: "/" + myConfig.output.publicPath,
// //     stats: {
// //       colors: true
// //     }
// //   }).listen(8080, "localhost", function(err) {
// //     if(err) throw new gutil.PluginError("webpack-dev-server", err);
// //     gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
// //   });
// // });