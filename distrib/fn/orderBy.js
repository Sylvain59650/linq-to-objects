/* global LinqCore */
Array.prototype.orderBy = function(keySelector, comparer) {
  var fn = LinqCore.buildFunction(keySelector);
  comparer = comparer || LinqCore.defaultComparer;
  this.sort(function(a, b) {
    var x = fn.apply(a, [a]);
    var y = fn.apply(b, [b]);
    return comparer(x, y);
  });
  return this;
}