Array.prototype.removeRange = function(position, count) {
  this.splice(position, count);
  return this;
}