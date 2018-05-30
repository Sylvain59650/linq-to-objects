Array.prototype.all = function(clause) {
  return (this.count(clause) === this.length);
}

Array.prototype.trueForAll = Array.prototype.all;