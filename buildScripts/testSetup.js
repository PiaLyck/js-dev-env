//This file is not transpiled, so it must use CommonJS and ES5

//Register Babel to transpile before our tests run.
require('babel-register')();

//Disable webpack features that Mocha does not understand eg. css. So if Mocha sees something with .css, treat it like an empty function.
require.extensions['.css'] = function(){};