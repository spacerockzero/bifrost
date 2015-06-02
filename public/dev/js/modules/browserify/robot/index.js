// robot module
console.log('inside robot module');

// dependency requires
var battery = require('../battery');

console.log('req dep battery from robot',battery);

module.exports = {
  name: 'robot',
  color: 'silver',
  sound: 'beep-boop-beep!',
  dep: battery
};

