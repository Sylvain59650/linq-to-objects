Array.prototype.first = function(clause) {
  var f = this.firstOrDefault(clause, null);
  if (f === null) { throw new Error("NotFoundException"); }
  return f;
}

Array.prototype.firstOrDefault = function(clause, defaultValue) {
  defaultValue = defaultValue || null;
  if (arguments.length === 0) {
    return (this.length > 0) ? this[0] : defaultValue;
  }
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (clause.apply(this[i], [this[i], i])) {
      return this[i];
    }
  }
  return defaultValue;
}