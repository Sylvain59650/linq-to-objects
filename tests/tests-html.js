var users = [{
  name: "Edward",
  age: 21
}, {
  name: "Sharpe",
  age: 37
}, {
  name: "Alfred",
  age: 45
}, {
  name: "Thomas",
  age: -12
}, {
  name: "Paul",
  age: 13
}, {
  name: "Tibo",
  age: 37
}, {
  name: "Manuel",
  age: 38
}];

console.log(users.where(x => x.name[0] === "f"));

var users2 = [{
  'name': 'freddy',
  age: 60
}, {
  'name': 'penelope',
  age: 24
}]

try {
  console.log(users.addRange(users2));
} catch (e) { console.log("addRange", e) }


var users3 = users.selectNew("name", "age");
console.log(users3);


console.log("orderBy", users3.orderBy(x => x.name));

console.log("orderBy", users3.orderBy("age"));

var d = users3.groupBy(x => x.age);
d.forEach(x => console.log(x));


var fruits = ["apple", "mango", "orange", "passionfruit", "grape"];
var longestName =
  fruits.aggregate(
    (longest, next) =>
    next.length > longest.length ? next : longest,
    fruit => fruit.toUpperCase()
  );
console.log("The fruit with the longest name is ",
  longestName);


var res = users3.aggregate(0, (a, b) => a + b.age);
console.log("aggregate", res);

var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(ints.aggregate(0, (a, b) => a + b));

console.log("sum", ints.sum());
console.log("sum", users3.sum(x => x.age));

console.log("average", users3.average(x => x.age));
console.log("min", users3.min(x => x.age));

console.log("min", ints.min());

console.log("max", ints.max());

console.log(ints.reverse(5, 5));

users.removeAll(x => x.age < 30);
console.log("remove", users);

console.log("remove", ints.removeRange(5, 5));

console.log("castArray", Array.castArray("toto"));
console.log("castArray", Array.castArray(["toto"]));

function defaultComparer(a, b) {
  return (a === b) ? 0 : (a < b) ? -1 : 1;
}

console.log(defaultComparer(5, 6));
console.log(defaultComparer(6, 6));
console.log(defaultComparer(16, 6));

var i1 = [1, 2, 3];
var i2 = [4, 5, 6];
console.log([...i1, ...i2]);
console.log("union", [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 8].union([9, 10, 1, 3]));
console.log("intersect", [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 8].intersect([9, 10, 1, 3]));


var chars = ["a", "b", "c", "d"];
var csv = chars.aggregate((a, b) => a + ',' + b);
console.log(csv); // Output a,b,c,d



var grades = [78, 92, 100, 37, 81];
var average = grades.average();
console.log("The average grade is ", average);

var fruits = ["apple", "banana", "mango", "orange", "passionfruit", "grape"];
console.log(fruits.count());
console.log(fruits.count(x => x.includes("n")));

var ages = [21, 46, 46, 55.3, 17, 21, 55.4, 55.5, 55.4, 55.3];
console.log(ages.distinct());
console.log(ages.distinct(Math.floor));

var names = ["Hartono Tommy", "Adams Terry",
  "Andersen Henriette Thaulow",
  "Hedlund Magnus", "Ito Shu"
];
console.log(names.firstOrDefault(name => name.length > 20));
console.log(names.firstOrDefault(name => name.length > 200, "not found"));

console.log([6.1, 4.2, 6.3].groupBy(Math.floor));


var numbers = [9, 34, 65, 92, 87, 435, 3, 54,
  83, 23, 87, 435, 67, 12, 19
];

console.log(numbers.first(number => number > 80));
try {
  console.log(numbers.first(number => number > 800));
} catch (e) {
  console.log(e);
}

console.log(numbers.last(number => number > 80));
try {
  console.log(numbers.last(number => number > 800));
} catch (e) {
  console.log(e);
}

console.log(numbers.min(number => number));


console.log([].max(x => x, 50));

var store1 = [{
  Name: "apple",
  Code: 9
}, {
  Name: "orange",
  Code: 4
}];

var store2 = [{
  Name: "apple",
  Code: 9
}, {
  Name: "lemon",
  Code: 12
}, {
  Name: "apple",
  Code: 9
}, ];
console.log("distinct", store2.distinct(Array.Identity, compare2stores));

console.log("findIndex", store2.findIndex(x => x.Code === 12));


function compare2stores(item1, item2) {
  if (item1.Name === item2.Name) {
    if (item1.Code === item2.Code) return 0;
    return item1.Code < item2.Code;
  }
  return item1.Name < item2.Name;
}
console.log("intersect", store1.intersect(store2, compare2stores));

try {
  console.log("findIndex", [].findIndex());
} catch (e) {
  console.log(e);
}
console.log("findIndex", [2, 3, 4, 5, 1, 5, 8].findIndex(x => x == 1));

console.log("findLast", [2, 3, 4, 5, 1, 5, 8].findLast(x => x == 5));

var users = [{
  name: "Edward",
  age: 21
}, {
  name: "Sharpe",
  age: 37
}, {
  name: "Alfred",
  age: 45
}, {
  name: "Thomas",
  age: -12
}, {
  name: "Paul",
  age: 13
}, {
  name: "Tibo",
  age: 37
}, {
  name: "Manuel",
  age: 38
}];
console.log("findLast", users.findLast(x => x.age < 36));
console.log("find", users.find(x => x.age < 36));

console.log("findLast", [1, 2, 3, 4].findLast(n => n % 2 == 1));


var users = [{
  'user': 'barney',
  'active': false
}, {
  'user': 'fred',
  'active': false
}, {
  'user': 'pebbles',
  'active': true
}, {
  'user': 'sabrina',
  'active': false
}];

var users4 = users.takeWhile(o => !o.active);
console.log("takeWhile", users4);

console.log("union", [2, 2, 2, 3].union([1, 2]));
// => [2, 1]