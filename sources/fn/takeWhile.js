Array.prototype.takeWhile = function(clause) {
  return this.slice(0, this.whileIndex(clause));
}