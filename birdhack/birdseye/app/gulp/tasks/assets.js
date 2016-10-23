'use strict';

/**
 * Task: assets 
 *
 * Copy / process all assets like images, fonts, etc.
 */

var gulp    = require('gulp');
var flatten = require('gulp-flatten');

// == Register task: watch
gulp.task('assets', function(){

  // Just copy all assets.
  var assets = ['images'];
  assets.forEach(function(asset){
    gulp.src('app/assets/'+asset+'/**')
      .pipe(gulp.dest('build/'+asset));
  });

  // Copy local fonts
  gulp.src('app/assets/fonts/**')
    .pipe(gulp.dest('build/fonts/'));


  // Copy fonts from libraries 
  gulp.src('node_modules/**/*.{otf,eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('build/fonts/'));

});

