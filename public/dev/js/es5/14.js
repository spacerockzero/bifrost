'use strict';

var object = {
  value: 42,
  toString: function toString() {
    return this.value;
  }
};

console.log(object.toString() === 42);
// -> true