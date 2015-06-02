'use strict';

// Basic usage with an expression placeholder
var person = 'Addy Osmani';
console.log('Yo! My name is ' + person + '!');

// Expressions work just as well with object literals
var user = { name: 'Caitlin Potter' };
console.log('Thanks for getting this into V8, ' + user.name + '.');

// Expression interpolation. One use is readable inline math.
var a = 50;
var b = 100;
console.log('The number of JS frameworks is ' + (a + b) + ' and not ' + (2 * a + b) + '.');

// Multi-line strings:
console.log('string text line 1\nstring text line 2');
// Or, alternatively:
console.log('string text line 1\n\
string text line 2');

// Functions inside expressions
function fn() {
  return 'result';
}
console.log('foo ' + fn() + ' bar');