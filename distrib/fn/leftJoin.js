Array.prototype.leftJoin = function(array, conditions, fieldsRight, newFieldName) {
  if (array) {
    var ar = array.length;
    var cc = conditions.split("=");
    var leftPropertyName = cc[0].trim();
    var rightPropertyName = "";
    if (cc.length > 1) { rightPropertyName = cc[1].trim(); } else { rightPropertyName = leftPropertyName }
    var fullObject = (typeof fieldsRight === "undefined");
    //newPropertyName = newPropertyName || rightPropertyName;
    if (!fullObject) {
      var props = Array.castArray(fieldsRight);
    }

    for (var i = 0, al = this.length; i < al; i++) {
      var item = this[i];
      for (var j = 0; j < ar; j++) {
        var right = array[j];
        if (item[leftPropertyName] === right[rightPropertyName]) {
          if (fullObject) {
            item[newFieldName] = right;
          } else {
            for (var kk = 0; kk < props.length; kk++) {
              var propName = props[kk];
              item[propName] = right[propName];
            }
          }
        }
      }
    }
  }
  return this;
}