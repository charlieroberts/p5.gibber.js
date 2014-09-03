p5.prototype.Gibber = require('gibber.lib')

p5.prototype.Gibber.export( p5.prototype )

// this will probably get us into trouble on mobile devices...
p5.prototype.Gibber.init({ globalize:false, target:p5.prototype })

p5.prototype.Master = p5.prototype.Gibber.Master

p5.prototype.Rndi = p5.prototype.Gibber.Audio.Rndi
p5.prototype.Rndf = p5.prototype.Gibber.Audio.Rndf
p5.prototype.rndi = p5.prototype.Gibber.Audio.rndi
p5.prototype.rndf = p5.prototype.Gibber.Audio.rndf