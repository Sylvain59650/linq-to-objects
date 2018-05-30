/* global LinqCore */
Array.prototype.union = function(second, comparer) {
  second = second || [];
  comparer = comparer || LinqCore.defaultComparer;
  return [...this, ...second].distinct(LinqCore.noop, comparer);
}