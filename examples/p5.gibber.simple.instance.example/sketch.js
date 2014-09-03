var s = function( sketch ) {
  var drums, follow
  
  sketch.setup = function() {
    sketch.createCanvas( sketch.windowWidth, sketch.windowHeight )

    drums = sketch.Gibber.Percussion.EDrums('x*o*x*o-')
    follow = sketch.Gibber.Analysis.Follow( drums )
  };

  sketch.draw = function() {
    sketch.background( follow.getValue() * 255 )
  }
}

var myp5 = new p5( s )