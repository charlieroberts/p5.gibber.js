p5.gibber.js
============

Music and audio programming for p5.js. This is a thin wrapper around [Gibber.lib](http://charlie-roberts.com/gibber/gibber-lib-js), which enables easy musical sequencing and audio signal processing.

##Usage
The library can be found in the `dist` folder. To use it in a p5 sketch:

1. Include `p5.js`
2. Include `p5.gibber.js`
3. Include your `sketch.js` file

There are a variety of examples in the included examples directory.

##Using Drum Samples
Gibber will look for a folder named 'resources' that lives in the same directory as your index.html and sketch.js files. Inside this folder is where you should place any audio samples you'd like to use or the Gibber drum samples. So, a sample directory that uses the standard Gibber Drums object might look like this:


    yourProjectDirectory
      > resources
        > audiofiles
          > electronic 
            kick.wav
            hat.wav
            snare.wav
            openhat.wav
      index.html
      sketch.js

Audio resources *can only be loaded from a running webserver*, as HTTP is used to transfer the files. There is always the EDrums object to use if such a server
is unavailable... it provides synthetic drums that are tweakable instead of the sample-based drums used by the Drums object.

## Using SoundFonts
In a similar fashion to the drum and audio samples, soundfonts must be placed in a directory named 'soundfonts' inside a directory named 'resources' that lives in your project directory.

    yourProjectDirectory
      > resources
        > soundfonts
        accordion-mp3.js
        acoustic-bass-mp3.js
        acoustic-grand-piano-mp3.js
        ... etc.
      index.html
      sketch.js

The actual soundfont used has been converted by Benjamin Gleitzman at the following repo: https://github.com/gleitz/midi-js-soundfonts

You only need the .js files to be stored on your server, the actual .mp3s aren't needed. As with the Drums samples, the SoundFont object only works if you load the .html file from a running web server.

##Examples
Simple examples of `p5` and `p5.gibber.js` can be found [here](http://charlie-roberts.com/gibber/p5-gibber/).

##Building
The library is an extremely thin wrapper around `Gibber.lib`; it currently only adds eight lines of code. This code ensures that Gibber functions are exported either to the global namespace or the `p5.prototype` object only, as per [the instructions found here](https://github.com/lmccart/p5.js/wiki/p5.js-overview#instantiation--namespace). Thus, if you need to hack on Gibber, it's best to do so on Gibber.lib.

If you really want to build the library:

1. If you didn't install the library using `npm`, run `npm install` in the top-level of the repo to install all the libraries needed to build `p5.gibber.js`.
2. Now run `gulp` at the top-level of the repo.
