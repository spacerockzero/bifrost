'use strict';
// define favorite as a non-writable `constant` and give it the value 7
Object.defineProperties(window, {
  favorite: {
    value: 7,
    enumerable: true
  }
});
// ^ descriptors are by default false and const are enumerable
var favorite = 7;
// Attempt to overwrite the constant
favorite = 15;
// will still print 7
console.log('my favorite number is still: ' + favorite);