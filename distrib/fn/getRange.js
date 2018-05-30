Array.prototype.getRange = function(start, end) {
  return this.slice(start, (end || this.length) + 1);
}