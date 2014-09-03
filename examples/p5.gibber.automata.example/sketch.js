var rows = 10,
    columns = 10
    
function setup() {  
  createCanvas( windowWidth, windowHeight )
  frameRate( 5 )
  
  // sound engine
  fm = FM({ maxVoices:16, attack:ms(1) })
  fm.fx.add( Reverb() )
  
  life.init( rows, columns )
  
  life.onbirth = function( x, y ) {
    var child = fm.voiceCount,
        frequency = 220 + ( y / this.rows ) * 880 + ( 880 / this.rows ) / (x + 1),
        pan = -1 + ( x / this.columns ) * 2
        //cmRatio = this.rows / ( x + 1 )
        
    fm.note( frequency  )
    
    // fm.children[ child ].cmRatio = cmRatio
    fm.children[ child ].pan = pan
  }
}

function draw() {
  life.run()
  
  var _width = windowWidth / columns,
      _height = windowHeight / rows
  
  for( var y = 0; y < rows; y++ ) {
    for( var x = 0; x < columns; x++ ) {
      var cell = life.cells[ x ][ y ],
          value = cell.value
      
      fill( value * 255 )
      rect( x * _width, y * _height, _width, _height )
    }
  }
}