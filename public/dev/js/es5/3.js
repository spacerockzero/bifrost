'use strict';

var a = 5;
var b = 10;

if (a === 5) {
  // technically is more like the following
  (function () {
    var a = 4;
    b = 1;

    console.log(a); // 4
    console.log(b); // 1
  })();
}

console.log(a); // 5
console.log(b); // 1