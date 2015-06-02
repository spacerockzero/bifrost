// monkey module entrypoint
console.log('inside monkey module');

// dependency requires
var banana = require('../banana');
console.log('req dep banana',banana);
console.log('req dep banana.color',banana.color);
console.log('req dep banana.smell',banana.smell);

module.exports = {
  name: 'monkey',
  color: 'brown',
  sound: 'oooh-eeeh-ah-ah!',
  dep: banana
};
