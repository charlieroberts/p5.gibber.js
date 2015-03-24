p5.prototype.Gibber = require( 'gibber.core.lib' )
p5.prototype.Gibber.Audio = require( 'gibber.audio.lib' )( p5.prototype.Gibber )

p5.prototype.Gibber.init({ globalize:false, target:p5.prototype })

p5.prototype.Gibber.export( p5.prototype )
p5.prototype.Gibber.Master = p5.prototype.Gibber.Audio.Master