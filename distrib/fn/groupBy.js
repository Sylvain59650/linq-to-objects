Array.prototype.groupBy = function(predicat) {
  var map = {};
  this.map(function(element) {
    var key = predicat(element);
    map[key] = map[key] || [];
    map[key].push(element);
  });

  var arr = [];
  for (var k in map) {
    var item = { key: k, elements: map[k] };
    arr.push(item);
  }
  return arr;
}