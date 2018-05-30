Array.prototype.forEach = function(action) {
  for (var i = 0, len = this.length; i < len; i++) {
    action.apply(this[i], [this[i], i]);
  }
  return this;
}