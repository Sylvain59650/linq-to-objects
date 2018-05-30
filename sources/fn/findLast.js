/* global LinqCore */
Array.prototype.findLast = function(predicate) {
  LinqCore.ensurePredicate(predicate);
  for (var l = this.length - 1, i = l; i >= 0; i--) {
    if (predicate(this[i])) {
      return this[i];
    }
  }
  return null;
}