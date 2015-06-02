'use strict';

var prefix = 'foo';
var myObject = {};

myObject[prefix + 'bar'] = 'hello';
myObject[prefix + 'baz'] = 'world';

console.log(myObject['foobar']);
// -> hello
console.log(myObject['foobaz']);
// -> world