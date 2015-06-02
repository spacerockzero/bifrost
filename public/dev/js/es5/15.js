'use strict';

function getPoint() {
  var x = 1;
  var y = 10;

  return { x: x, y: y };
}

console.log(getPoint() === {
  x: 1,
  y: 10
});