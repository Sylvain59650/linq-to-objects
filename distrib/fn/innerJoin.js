Array.prototype.innerJoin = function(array, conditions, newPropertyName) {
  if (array) {
    var ar = array.length;
    var cc = conditions.split("=");
    var leftPropertyName = cc[0].trim();
    var rightPropertyName = "";
    if (cc.length > 1) { rightPropertyName = cc[1].trim(); } else { rightPropertyName = leftPropertyName }
    newPropertyName = newPropertyName || rightPropertyName;
    var props = [newPropertyName];
    for (var i = this.length - 1; i >= 0; i--) {
      var item = this[i];
      var found = false;
      for (var j = 0; j < ar; j++) {
        var right = array[j];
        if (item[leftPropertyName] === right[rightPropertyName]) {
          found = true;
          for (var kk = 0; kk < props.length; kk++) {
            var propName = props[kk];
            item[propName] = right[propName];
          }
        }
      }
      if (!found) {
        this.splice(i, 1);
      }
    }
  }
  return this;
}