Array.prototype.removeAll = function(predicate) {
  var arr = [];
  var nb = 0;
  for (var i = 0, len = this.length; i < len; i++) {
    if (!predicate.apply(this[i], [this[i], i])) {
      arr.push(this[i]);
      nb++;
    }
  }
  this.length = 0;
  this.addRange(arr);
  return nb;
}