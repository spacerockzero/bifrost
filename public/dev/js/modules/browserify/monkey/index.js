// monkey module entrypoint
console.log('inside monkey module');

// dependency requires
var banana = require('../banana');
console.log('req dep banana from monkey',banana);
console.log('req dep banana.color from monkey',banana.color);
console.log('req dep banana.smell from monkey-faces',banana.smell);

var css = require('./monkey.css');
// do something nice here!

module.exports = {
  name: 'monkey',
  color: 'brown',
  sound: 'oooh-eeeh-ah-ah!',
  dep: banana
};
