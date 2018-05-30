/* global LinqCore */
Array.prototype.distinct = function(clause, comparer) {
  clause = clause || LinqCore.noop;
  comparer = comparer || LinqCore.defaultComparer;
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    var found = false;
    var val = clause(this[i]);
    for (var j = 0; j < arr.length; j++) {
      if (comparer(val, clause(arr[j])) === 0) {
        found = true;
        break;
      }
    }
    if (!found) {
      arr.push(val);
    }
  }
  return arr;
}