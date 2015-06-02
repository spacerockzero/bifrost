'use strict';

function f(x) {
  var y = [];
  y.push.apply(y, arguments) && y.shift();

  // y is an Array
  return x * y.length;
}

console.log(f(3, 'hello', true) === 6);
// -> true