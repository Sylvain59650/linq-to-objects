Array.prototype.addRange = function(array) {
  for (var it of array) { this.push(it); }
  return this;
}

Array.prototype.insertAt = function(position, value) {
  if (position >= this.length) {
    this.push(value);
    return this;
  }
  var arr = this.slice(0, position);
  arr.push(value);
  arr.addRange(this.slice(position + 1));
  this.clear();
  return this.addRange(arr);
}

Array.prototype.insertRangeAt = function(position, values) {
  if (position >= this.length) {
    this.addRange(values);
    return this;
  }
  var arr = this.slice(0, position);
  var right = this.slice(position + 1);
  arr.addRange(values);
  arr.addRange(right);
  this.clear();
  return this.addRange(arr);
}