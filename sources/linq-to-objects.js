Array.prototype.add = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    this.push(arguments[i]);
  }
  return this;
};
Array.prototype.addRange = function (array) {
  for (var it of array) {
    this.push(it);
  }
  return this;
};

Array.prototype.insertAt = function (position, value) {
  if (position >= this.length) {
    this.push(value);
    return this;
  }
  var arr = this.slice(0, position);
  arr.push(value);
  arr.addRange(this.slice(position + 1));
  this.clear();
  return this.addRange(arr);
};

Array.prototype.insertRangeAt = function (position, values) {
  if (position >= this.length) {
    this.addRange(values);
    return this;
  }
  var arr = this.slice(0, position);
  var right = this.slice(position + 1);
  arr.addRange(values);
  arr.addRange(right);
  this.clear();
  return this.addRange(arr);
};

Array.prototype.aggregate = function (initial, accumulate, selector) {
  if (this.length === 0) {
    return null;
  }
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
};

Array.prototype.sum = function (selector) {
  return this.aggregate(0, (x, y) => x + y, selector);
};

Array.prototype.average = function (selector) {
  if (this.length === 0) {
    return null;
  }
  return this.aggregate(0, (x, y) => x + y, selector) / this.length;
};

Array.prototype.min = function (selector, defaultValue) {
  if (this.length === 0) {
    return defaultValue || null;
  }
  selector = selector || LinqCore.noop;
  var m = selector(this[0]);
  return this.aggregate(m, (x, y) => {
    return x < y ? x : y;
  }, selector);
};

Array.prototype.max = function (selector, defaultValue) {
  if (this.length === 0) {
    return defaultValue || null;
  }
  selector = selector || LinqCore.noop;
  var m = selector(this[0]);
  return this.aggregate(m, (x, y) => {
    return x < y ? y : x;
  }, selector);
};
Array.prototype.all = function (clause) {
  return this.count(clause) === this.length;
};

Array.prototype.trueForAll = Array.prototype.all;
Array.prototype.any = function (clause) {
  return this.count(clause) > 0;
};
Array.castArray = function (obj) {
  if (obj === null) {
    return [];
  }
  if (typeof obj === "object" && obj.length) {
    return obj;
  }
  return [obj];
};
Array.prototype.clear = function () {
  this.length = 0;
};


const LinqCore = {
  noop: function (x) {
    return x;
  },

  defaultComparer: function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  },

  ensurePredicate: function (predicate) {
    if (typeof predicate !== "function") {
      throw new Error("Argument is not predicate");
    }
  },

  buildFunction: function (clause) {
    if (typeof clause === "string") {
      if (clause.indexOf("=>") > 0) {
        var expr = clause.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
        return new Function(expr[1], "return (" + expr[2] + ")");
      }
      return new Function("x", "return (x." + clause + ")");
    }
    return clause;
  }
};

Array.prototype.count = function (predicate) {
  if (arguments.length === 0) {
    return this.length;
  }
  LinqCore.ensurePredicate(predicate);
  var nb = 0;
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (predicate.apply(this[i], [this[i], i])) {
      nb++;
    }
  }
  return nb;
};

Array.prototype.distinct = function (clause, comparer) {
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
};
Array.prototype.equals = function (array) {
  if (array === null) {
    return false;
  }
  if (array.length !== this.length) {
    return false;
  }
  for (var i = 0, l = array.length; i < l; i++) {
    if (this[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

Array.prototype.sequenceEqual = Array.prototype.equals;

Array.prototype.findIndex = function (predicate) {
  LinqCore.ensurePredicate(predicate);
  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return i;
    }
  }
  return -1;
};

Array.prototype.findLast = function (predicate) {
  LinqCore.ensurePredicate(predicate);
  for (var l = this.length - 1, i = l; i >= 0; i--) {
    if (predicate(this[i])) {
      return this[i];
    }
  }
  return null;
};

Array.prototype.findLastIndex = function (predicate) {
  LinqCore.ensurePredicate(predicate);
  for (var l = this.length - 1, i = l; i >= 0; i--) {
    if (predicate(this[i])) {
      return i;
    }
  }
  return -1;
};
Array.prototype.first = function (clause) {
  var f = this.firstOrDefault(clause, null);
  if (f === null) {
    throw new Error("NotFoundException");
  }
  return f;
};

Array.prototype.firstOrDefault = function (clause, defaultValue) {
  defaultValue = defaultValue || null;
  if (arguments.length === 0) {
    return this.length > 0 ? this[0] : defaultValue;
  }
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (clause.apply(this[i], [this[i], i])) {
      return this[i];
    }
  }
  return defaultValue;
};
Array.prototype.forEach = function (action) {
  for (var i = 0, len = this.length; i < len; i++) {
    action.apply(this[i], [this[i], i]);
  }
  return this;
};
Array.prototype.getRange = function (start, end) {
  return this.slice(start, (end || this.length) + 1);
};
Array.prototype.groupBy = function (predicat) {
  var map = {};
  this.map(function (element) {
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
};
Array.prototype.innerJoin = function (array, conditions, newPropertyName) {
  if (array) {
    var ar = array.length;
    var cc = conditions.split("=");
    var leftPropertyName = cc[0].trim();
    var rightPropertyName = "";
    if (cc.length > 1) {
      rightPropertyName = cc[1].trim();
    } else {
      rightPropertyName = leftPropertyName;
    }
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
};

Array.prototype.intersect = function (second, comparer) {
  second = second || [];
  comparer = comparer || LinqCore.defaultComparer;
  var arr = [];
  for (var i1 of this) {
    for (var i2 of second) {
      if (comparer(i1, i2) === 0) {
        if (arr.findIndex(x => x === i2, comparer) === -1) {
          arr.push(i2);
        }
      }
    }
  }
  return arr;
};

Array.prototype.lastOrDefault = function (predicate, defaultValue) {
  defaultValue = defaultValue || null;
  predicate = predicate || LinqCore.noop;
  if (arguments.length === 0) {
    return this.length > 0 ? this[this.length - 1] : defaultValue;
  }
  var len = this.length;
  for (var i = len - 1; i >= 0; i--) {
    if (predicate.apply(this[i], [this[i], i])) {
      return this[i];
    }
  }
  return defaultValue;
};

Array.prototype.last = function (predicate) {
  var f = this.lastOrDefault(predicate, null);
  if (f === null) {
    throw new Error("NotFoundException");
  }
  return f;
};
Array.prototype.leftJoin = function (array, conditions, fieldsRight, newFieldName) {
  if (array) {
    var ar = array.length;
    var cc = conditions.split("=");
    var leftPropertyName = cc[0].trim();
    var rightPropertyName = "";
    if (cc.length > 1) {
      rightPropertyName = cc[1].trim();
    } else {
      rightPropertyName = leftPropertyName;
    }
    var fullObject = typeof fieldsRight === "undefined";

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
};

Array.prototype.orderBy = function (keySelector, comparer) {
  var fn = LinqCore.buildFunction(keySelector);
  comparer = comparer || LinqCore.defaultComparer;
  this.sort(function (a, b) {
    var x = fn.apply(a, [a]);
    var y = fn.apply(b, [b]);
    return comparer(x, y);
  });
  return this;
};

Array.prototype.orderByDescending = function (keySelector, comparer) {
  var fn = LinqCore.buildFunction(keySelector);
  comparer = comparer || LinqCore.defaultComparer;
  this.sort(function (a, b) {
    var y = fn.apply(a, [a]);
    var x = fn.apply(b, [b]);
    return comparer(y, x);
  });
  return this;
};
Array.prototype.removeAll = function (predicate) {
  var arr = [];
  var nb = 0;
  for (var i = 0, len = this.length; i < len; i++) {
    if (!predicate.apply(this[i], [this[i], i])) {
      arr.push(this[i]);
      nb++;
    }
  }
  this.length = 0;
  this.addRange(arr);
  return nb;
};
Array.prototype.removeAt = function (position) {
  this.splice(position, 1);
  return this;
};
Array.prototype.removeRange = function (position, count) {
  this.splice(position, count);
  return this;
};
Array.prototype.reverse = function (index, count) {
  index = index || 0;
  count = count || this.length - index;
  if (index < 0 || count < 0 || index > this.length || index + count > this.length) {
    return null;
  }
  var arr = [];
  var before = this.slice(0, index);
  var after = this.slice(index + count, this.length);
  for (var i = index + count - 1; i >= index; i--) {
    arr.push(this[i]);
  }
  return [...before, ...arr, ...after];
};
Array.prototype.selectNew = function (...fieldsNames) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    var item = {};
    for (var f of fieldsNames) {
      item[f] = this[i][f];
    }
    arr.push(item);
  }
  return arr;
};
Array.prototype.skip = function (num) {
  return this.slice(num || 1, this.length);
};
Array.prototype.skipWhile = function (clause) {
  return this.slice(this.whileIndex(clause), this.length);
};

Array.prototype.whileIndex = function (clause) {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (!clause.apply(this[i], [this[i], i])) {
      return i;
    }
  }
  return len - 1;
};
Array.prototype.takeWhile = function (clause) {
  return this.slice(0, this.whileIndex(clause));
};

Array.prototype.union = function (second, comparer) {
  second = second || [];
  comparer = comparer || LinqCore.defaultComparer;
  return [...this, ...second].distinct(LinqCore.noop, comparer);
};
Array.prototype.where = function (predicate) {
  return this.filter(predicate);
};