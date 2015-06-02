'use strict';

function greet() {
  // unfair ... if you access arguments[0] like this you can simply
  // access the msg variable name instead
  var msg = arguments[0] === undefined ? 'hello' : arguments[0];
  var name = arguments[1] === undefined ? 'world' : arguments[1];
  console.log(msg, name);
}

function greet(msg, name) {
  (msg === undefined) && (msg = 'hello');
  (name === undefined) && (name = 'world');
  console.log(msg,name);
}

// using basic utility that check against undefined
function greet(msg, name) {
  console.log(
    defaults(msg, 'hello'),
    defaults(name, 'world')
  );
}

greet();
// -> hello world
greet('hey');
// -> hey world