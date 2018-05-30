Array.prototype.skip = function(num) {
  return this.slice(num || 1, this.length);
}