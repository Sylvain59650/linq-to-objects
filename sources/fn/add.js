Array.prototype.add = function() {
  for (var i = 0, l = arguments.length; i < l; i++) { this.push(arguments[i]); }
  return this;
}