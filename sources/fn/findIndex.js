/* global LinqCore */
Array.prototype.findIndex = function(predicate) {
  LinqCore.ensurePredicate(predicate);
  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return i;
    }
  }
  return -1;
}