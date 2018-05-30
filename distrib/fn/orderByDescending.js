/* global LinqCore */
Array.prototype.orderByDescending = function(keySelector, comparer) {
  var fn = LinqCore.buildFunction(keySelector);
  comparer = comparer || LinqCore.defaultComparer;
  this.sort(function(a, b) {
    var y = fn.apply(a, [a]);
    var x = fn.apply(b, [b]);
    return comparer(y, x);
  });
  return this;
}