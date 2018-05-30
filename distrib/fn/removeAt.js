Array.prototype.removeAt = function(position) {
  this.splice(position, 1);
  return this;
}