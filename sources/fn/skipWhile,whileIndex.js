Array.prototype.skipWhile = function(clause) {
  return this.slice(this.whileIndex(clause), this.length);
}

Array.prototype.whileIndex = function(clause) {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (!clause.apply(this[i], [this[i], i])) {
      return i;
    }
  }
  return len - 1;
}