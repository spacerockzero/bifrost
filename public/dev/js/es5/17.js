'use strict';

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : [].slice.call(arr);
};

function add(a, b) {
  return a + b;
}

var nums = [5, 4];
console.log(add.apply(null, _toArray(nums)));