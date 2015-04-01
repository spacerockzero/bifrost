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
  MODULES: {
    SRC: DEVASSETS + '/js/modules/'
  },
  BROWSERIFY: {
    bundleConfigs: [{
      entries: DEVASSETS + '/js/modules/browserify/',
      dest: DISTASSETS + '/js/browserify/'
    }],
    modules: {
      src: DEVASSETS + '/js/modules/browserify/**/',
      dist: DISTASSETS + '/js/browserify/'
    }
  },
  WEBPACK: {
    SRC: DEVASSETS + '/js/modules/webpack/',
    DIST: DISTASSETS + '/js/webpack/',
    // cache: true,
    // entry: {
    //   jquery: "./app/jquery",
    //   bootstrap: ["!bootstrap-webpack!./app/bootstrap/bootstrap.config.js", "./app/bootstrap"],
    //   react: "./app/react"
    // },
    // output: {
    //   path: path.join(__dirname, "dist"),
    //   publicPath: "dist/",
    //   filename: "[name].js",
    //   chunkFilename: "[chunkhash].js"
    // },
    // module: {
    //   loaders: [
    //     // required to write "require('./style.css')"
    //     { test: /\.css$/,    loader: "style-loader!css-loader" },

    //     // required for bootstrap icons
    //     { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
    //     { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
    //     { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
    //     { test: /\.svg$/,    loader: "file-loader?prefix=font/" },

    //     // required for react jsx
    //     { test: /\.js$/,    loader: "jsx-loader" },
    //     { test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },
    //   ]
    // },
    // resolve: {
    //   alias: {
    //     // Bind version of jquery
    //     jquery: "jquery-2.0.3",

    //     // Bind version of jquery-ui
    //     "jquery-ui": "jquery-ui-1.10.3",

    //     // jquery-ui doesn't contain a index file
    //     // bind module to the complete module
    //     "jquery-ui-1.10.3$": "jquery-ui-1.10.3/ui/jquery-ui.js",
    //   }
    // },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     // Automtically detect jQuery and $ as free var in modules
    //     // and inject the jquery library
    //     // This is required by many jquery plugins
    //     jQuery: "jquery",
    //     $: "jquery"
    //   })
    // ]
  }
};
