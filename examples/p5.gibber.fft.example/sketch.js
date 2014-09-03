// fftSize must be at least 32, and a power of 2 (32,64,128,256 etc.)
var fftSize = 32

function setup() {
  createCanvas( windowWidth, windowHeight )

  drums = EDrums('x*o*x*o-')
  drums.amp = .75
  
  bass = FM('bass')
    .note.seq( [0,0,0,7,14,13].rnd(), [1/8,1/16].rnd(1/16,2) )
    
  rhodes = Synth( 'rhodes', {amp:.35} )
    .chord.seq( Rndi(0,6,3), 1 )
    .fx.add( Delay() )

  fft = FFT( fftSize )
  
  Gibber.scale.root.seq( ['c4','ab3','bb3'], [4,2,2] )
  Gibber.scale.mode.seq( ['Minor','Mixolydian'], [6,2] )
  
  noStroke()
  colorMode( HSB, 255 )
}

function draw() {
  background( 64 )
  
  var numBars = fftSize / 2,
      barHeight = ( height - 1 ) / numBars,
      barColor = null, 
      value = null
    
  for( var i = 0; i < numBars; i++ ) {
    barColor = color( ( i / numBars ) * 255, 255, 255 )
    fill( barColor ) 
    
    // read FFT value, which ranges from 0-255, and scale it.
    value = ( fft[ i ] / 255 ) * width
    
    rect( 0, barHeight * i, value, barHeight )
  }
}