'use strict';

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f.apply(null, [1, 2, 3]) === 6;