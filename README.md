p5.gibber.js
============

Music and audio programming for p5.js. This is a thin wrapper around [Gibber.lib](http://charlie-roberts.com/gibber/gibber-lib-js), which enables easy musical sequencing and audio signal processing.

##Usage
The library can be found in the `dist` folder. To use it in a p5 sketch:

1. Include `p5.js`
2. Include `p5.gibber.js`
3. Include your `sketch.js` file

There are a variety of examples in the included examples directory.

##Examples
Simple examples of `p5` and `p5.gibber.js` can be found [here](http://charlie-roberts.com/gibber/p5-gibber/).

##Building
The library is an extremely thin wrapper around `Gibber.lib`; it currently only adds eight lines of code. This code ensures that Gibber functions are exported either to the global namespace or the `p5.prototype` object only, as per [the instructions found here](https://github.com/lmccart/p5.js/wiki/p5.js-overview#instantiation--namespace). Thus, if you need to hack on Gibber, it's best to do so on Gibber.lib.

If you really want to build the library:

1. If you didn't install the library using `npm`, run `npm install` in the top-level of the repo to install all the libraries needed to build `p5.gibber.js`.
2. Now run `gulp` at the top-level of the repo.