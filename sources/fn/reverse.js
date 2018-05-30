Array.prototype.reverse = function(index, count) {
  index = index || 0;
  count = count || (this.length - index);
  if (index < 0 || count < 0 || index > this.length || index + count > this.length) {
    return null;
  }
  var arr = [];
  var before = this.slice(0, index);
  var after = this.slice(index + count, this.length);
  for (var i = index + count - 1; i >= index; i--) { arr.push(this[i]); }
  return [...before, ...arr, ...after];
}