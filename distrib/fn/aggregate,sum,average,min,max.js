/* global LinqCore */
Array.prototype.aggregate = function(initial, accumulate, selector) {
  if (this.length === 0) { return null; }
  var start = 0;
  if (typeof initial === "function") {
    selector = accumulate;
    selector = selector || LinqCore.noop;
    accumulate = initial;
    initial = selector(this[0]);
    start = 1;
  }
  selector = selector || LinqCore.noop;
  for (var i = start; i < this.length; i++) {
    initial = accumulate(initial, selector(this[i]));
  }
  return initial;
}

Array.prototype.sum = function(selector) {
  return this.aggregate(0, (x, y) => x + y, selector);
}

Array.prototype.average = function(selector) {
  if (this.length === 0) { return null; }
  return this.aggregate(0, (x, y) => x + y, selector) / this.length;
}

Array.prototype.min = function(selector, defaultValue) {
  if (this.length === 0) { return defaultValue || null; }
  selector = selector || LinqCore.noop;
  var m = selector(this[0]);
  return this.aggregate(m, (x, y) => { return (x < y) ? x : y }, selector);
}

Array.prototype.max = function(selector, defaultValue) {
  if (this.length === 0) { return defaultValue || null; }
  selector = selector || LinqCore.noop;
  var m = selector(this[0]);
  return this.aggregate(m, (x, y) => { return (x < y) ? y : x }, selector);
}