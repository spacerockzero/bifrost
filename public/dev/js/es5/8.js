String.prototype.asNamedList = function () {
  return this.split(/\s*,\s*/).map(function (name, i) {
    return name ? ('var ' + name + '=slice(' + i + ', ' + (i + 1) + ')[0]') : '';
  }).join(';');
};

// with([1,2,3]) {
//   eval('a, , b'.asNamedList());
// }