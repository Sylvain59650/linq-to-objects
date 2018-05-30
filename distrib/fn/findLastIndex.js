/* global LinqCore */
Array.prototype.findLastIndex = function(predicate) {
  LinqCore.ensurePredicate(predicate);
  for (var l = this.length - 1, i = l; i >= 0; i--) {
    if (predicate(this[i])) {
      return i;
    }
  }
  return -1;
}