var browserify = require( 'browserify' ),
    gulp = require( 'gulp' ),
    source = require( 'vinyl-source-stream' ),
    buffer = require( 'vinyl-buffer' ),
    rename = require( 'gulp-rename' ),    
    uglify = require( 'gulp-uglify' );

gulp.task( 'default', function(){
  var out = browserify({
    entries: [ './main.js' ],
    bare:true
  })

  out.bundle()
    .pipe( source('p5.gibber.js') )
    .pipe( gulp.dest('./dist/') )
    .pipe( gulp.dest('./examples/resources/') )
    .pipe( buffer() )
    .pipe( uglify() )
    .pipe( rename('p5.gibber.min.js') )
    .pipe( gulp.dest('./dist/') )
    .pipe( gulp.dest('./examples/resources/') )

  return out
});