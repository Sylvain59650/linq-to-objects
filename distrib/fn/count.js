/* global LinqCore */
Array.prototype.count = function(predicate) {
  if (arguments.length === 0) { return this.length; }
  LinqCore.ensurePredicate(predicate);
  var nb = 0;
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (predicate.apply(this[i], [this[i], i])) {
      nb++;
    }
  }
  return nb;
}