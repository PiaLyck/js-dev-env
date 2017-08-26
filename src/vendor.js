/* This file contains references to vendor libraries we're using
in this project. This is used by webpack in the production build only.
A seperate bundle for vendor code is useful since it's unlikely to
change as often as the application's code. 
So all the libraries we reference here will be written to vendor.js
so they can be cached until one of them change. This avoids users
to download a huge JS file any time a line of code changes. They 
only have to download vendor.js when a vendor library changes which
should be less frequent. 
Any files that isn't referenced here will be bundled into main.js 
for the production build.
*/

/* eslint-disable no-unused-var */
import fetch from 'whatwg-fetch'; //just a polyfill

/* Examples of other vendors: jQuery, Bootstrap, Angular or any 
other 3rd party library/framework used. */