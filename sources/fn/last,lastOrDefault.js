/* global LinqCore  */
Array.prototype.lastOrDefault = function(predicate, defaultValue) {
  defaultValue = defaultValue || null;
  predicate = predicate || LinqCore.noop;
  if (arguments.length === 0) {
    return (this.length > 0) ? this[this.length - 1] : defaultValue;
  }
  var len = this.length;
  for (var i = len - 1; i >= 0; i--) {
    if (predicate.apply(this[i], [this[i], i])) {
      return this[i];
    }
  }
  return defaultValue;
}

Array.prototype.last = function(predicate) {
  var f = this.lastOrDefault(predicate, null);
  if (f === null) { throw new Error("NotFoundException"); }
  return f;
}