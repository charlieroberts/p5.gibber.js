var ALIVE = 1,
    DEAD = 0

life = {
  cells: [],

  init: function( rows, columns ) {
    this.rows = rows
    this.columns = columns
    
    for ( var y = 0; y < rows; y++ ) {
      this.cells.push( [] )
      for ( var x = 0; x < columns; x++ ) {
        this.cells[ y ][ x ] = {
          value: rndi(0, 1)
        }
      }
    }
  },
  
  onbirth: function() {},
  ondeath: function() {},

  run: function() {
    for ( var y = 0; y < this.rows; y++ ) {
      for ( var x = 0; x < this.columns; x++ ) {
        var neighborCount = 0,
            cell = this.cells[ y ][ x ]
            
        if ( cell.value === ALIVE ) {
          cell.shouldDie = false;
        } else {
          cell.shouldLive = false;
        }

        if ( y !== 0 ) {
          if ( this.cells[ y - 1 ][ x ].value === ALIVE ) { // up
            neighborCount++;
          }
          if ( x !== this.columns - 1 ) {
            if ( this.cells[ y - 1 ][ x + 1 ].value === ALIVE ) { // upper right
              neighborCount++;
            }
          }
          if ( x !== 0 ) {
            if ( this.cells[ y - 1 ][ x - 1 ].value === ALIVE ) { // upper left
              neighborCount++;
            }
          }
        }
        if ( x !== 0 ) {
          if ( this.cells[ y ][ x - 1 ].value === ALIVE ) { // left
            neighborCount++;
          }
        }
        if ( x !== this.columns - 1 ) {
          if ( this.cells[ y ][ x + 1 ].value === ALIVE ) { // right
            neighborCount++;
          }
        }

        if ( y !== this.rows - 1 ) {
          if ( this.cells[ y + 1 ][ x ].value === ALIVE ) { // down
            neighborCount++;
          }
          if ( x !== this.columns - 1 ) {
            if ( this.cells[ y + 1 ][ x + 1 ].value === ALIVE ) { // lower right
              neighborCount++;
            }
          }
          if ( x !== 0 ) {
            if ( this.cells[ y + 1 ][ x - 1 ].value === ALIVE ) { // lower left
              neighborCount++;
            }
          }
        }
        if ( cell.value === ALIVE ) {
          if ( neighborCount < 2 || neighborCount > 3 ) {
            cell.shouldDie = true;
          }
        } else {
          if ( neighborCount === 3 ) {
            cell.shouldLive = true;
          }
        }
      }
    }

    for (var y = 0; y < this.rows; y++) {
      for (var x = 0; x < this.columns; x++) {
        var cell = this.cells[ y ][ x ];
        if ( cell.value === ALIVE) {
          if ( cell.shouldDie ) {
            cell.value = DEAD;
            this.ondeath( x, y )
          }
        } else {
          if ( cell.shouldLive ) {
            cell.value = ALIVE;
            this.onbirth( x, y )
          }
        }
      }
    }
  }
}
