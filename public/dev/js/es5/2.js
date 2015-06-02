'use strict';

var evens = [2, 4, 6, 8, 10];

// Expression bodies
var odds = evens.map(function (v) {
  return v + 1;
}, this);
var nums = evens.map(function (v, i) {
  return v + i;
}, this);

console.log(odds);
// -> [3, 5, 7, 9, 11]

console.log(nums);
// -> [2, 5, 8, 11, 14]

var fives = [];
nums = [1, 2, 5, 15, 25, 32];

// Statement bodies
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
}, this);

console.log(fives);
// -> [5, 15, 25]

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends: function printFriends() {
    this._friends.forEach(function (f) {
      return console.log(this._name + ' knows ' + f);
    }, this);
  }
};