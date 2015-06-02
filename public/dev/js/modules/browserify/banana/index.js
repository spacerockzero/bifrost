// banana module
console.log('inside banana module!');

var css = require('./style.css');
var lang = require('./locales/banana_en.json');

console.log('banana lang',lang);
// var template = require('./template.html');
// pass lang object values into template to bind them
// var html = template(lang);
// document.querySelectorAll('body').appendChild(html);

module.exports = {
  name: 'banana',
  color: 'yellow',
  fresh: 'yes',
  smell: 'banana-y'
};
