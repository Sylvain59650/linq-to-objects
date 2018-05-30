/* global LinqCore */
Array.prototype.intersect = function(second, comparer) {
  second = second || [];
  comparer = comparer || LinqCore.defaultComparer;
  var arr = [];
  for (var i1 of this) {
    for (var i2 of second) {
      if (comparer(i1, i2) === 0) {
        if (arr.findIndex(x => x === i2, comparer) === -1) {
          arr.push(i2);
        }
      }
    }
  }
  return arr;
}