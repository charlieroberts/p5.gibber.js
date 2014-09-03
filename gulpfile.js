var browserify = require( 'browserify' ),
    gulp = require( 'gulp' ),
    source = require( 'vinyl-source-stream' ),
    buffer = require( 'vinyl-buffer' ),
    uglify = require( 'gulp-uglify' );

gulp.task( 'default', function(){
  var out = browserify({
    entries: [ './main.js' ]
  })

  out.bundle()
    .pipe( source('p5.gibber.js') )
    .pipe( buffer() )
    //.pipe( uglify() )
    .pipe( gulp.dest('./dist/') );

  return out
});