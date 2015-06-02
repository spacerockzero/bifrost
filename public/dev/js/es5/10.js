'use strict';

function f(x, y) {
  if (y === undefined) {
    y = 12;
  }

  return x + y;
}

f(3) === 15;