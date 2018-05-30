Array.prototype.equals = function(array) {
  if (array === null) { return false; }
  if (array.length !== this.length) { return false; }
  for (var i = 0, l = array.length; i < l; i++) {
    if (this[i] !== array[i]) { return false; }
  }
  return true;
}

Array.prototype.sequenceEqual = Array.prototype.equals;