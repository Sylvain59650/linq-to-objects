Array.prototype.selectNew = function(...fieldsNames) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    var item = {};
    for (var f of fieldsNames) {
      item[f] = this[i][f];
    }
    arr.push(item);
  }
  return arr;
}