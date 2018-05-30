[<img src="back.png">Table Of Contents](../README.md)
# Array Methods

## add

    (this) add( (*) value)

Arguments

    (*) value : a value

Returns

    the current array with the value

Example

    var a=[].add(5).add(6); // [5,6]

## addRange

    (this) addRange( Array values)

Arguments

   values: a array of value

Returns

    the current array with elements of values
Example

        var a=[].addRange([5,6].addRange[7,8,9]); // [5,6,7,8,9]



## clear

    (this) clear()

Remove all elements of the current array

Argument

    None

Return

    the current array cleared

Example

    var a=[1,2,3,4,5];
    a.clear();
    console.log(a); // []


## concat <img src="js.png">

    Array concat( (...*) values)


Creates a new array concatenating array with any additional arrays and/or values.

Arguments

    [values] (...*): The values to concatenate.

Returns

    (Array): Returns the new concatenated array.

Example
	

    var myArray = [1];
    var other = myArray.concat(2, [3], [[4]]);
 
    console.log(other);
    // => [1, 2, 3, [4]]
 
    console.log(myArray);
    // => [1]

## aggregate

    aggregate(seed,accumulate,resultSelector)

 An aggregation operation computes a single value from a collection of values. An example of an aggregation operation is calculating the average daily temperature from a month's worth of daily temperature values.

    seed: The initial accumulator value.
    accumulate: An accumulator function to be invoked on each element.
    resultSelector: A function to transform the final accumulator value into the result value.
Returns

    The transformed final accumulator value.


 

The following illustration shows the results of two different aggregation operations on a sequence of numbers. The first operation sums the numbers. The second operation returns the maximum value in the sequence. 

Aggregate applies a method to each element. It applies a function to each successive element. With this extension method, we act upon the aggregate of all previous elements. This makes certain methods, such as sum, possible.


    var fruits = ["apple", "mango", "orange", "passionfruit", "grape"];
    var longestName = fruits.aggregate(
        (longest, next) =>
        next.length > longest.length ? next : longest,
        fruit => fruit.toUpperCase());
    console.log("The fruit with the longest name is ",longestName);  //PASSIONFRUIT

## all

    all(predicate)

 Returns true if all the elements in a collection match a certain condition.

    predicate: 

## any

    any(predicate)

 Returns true if almost one element in a collection match a certain condition.

    predicate:

## average

    average(selector)

Provides a declarative way to compute the average value of a sequence


    var grades = [78, 92, 100, 37, 81];
    var average = grades.average();
    console.log("The average grade is ", average); //77.6

## clear

    (this) clear()

Remove all elements of the current array

Argument

    None

Return

    the current array cleared

Example

    var a=[1,2,3,4,5];
    a.clear();
    console.log(a); // []

## count

    count(predicate)
Returns the number of elements in a sequence.

    predicate:A sequence that contains elements to be counted.


    var fruits = ["apple", "banana", "mango", "orange", "passionfruit", "grape"];
    console.log(fruits.count());  // 6
    console.log(fruits.count(x => x.includes("n"))); // 4


## distinct

    distinct(predicate)

Returns distinct elements from a sequence.

    var ages = [21, 46, 46, 55.3, 17, 21, 55.4, 55.5, 55.4, 55.3];
    console.log(ages.distinct());  // [ 21, 46, 55.3, 17, 55.4, 55.5 ]
    console.log(ages.distinct(Math.floor));  // [ 21, 46, 55, 17 ]



## equals
    boolean equals(Array anotherArray)

Argument 

    anotherArray : a array

Returns
    true if the array contains same value of anotherArray in same position, else false    

Example

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 }
    ];
    var items2 = items.shuffle();
    items.equals(items); // true
    items.equals(items2);  //false
    [1,2,3,"a","b","c"].equals([1,2,3,"a","b","c"]); // true


## filter <img src="chrome.png">
   Array filter(predicate)

Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Arguments

     predicate: The function invoked per iteration.

Returns

    (Array): Returns the new filtered array.

Example
	

    var users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
    ];
    
    users.filter(o => !o.active);
    //  { 'user': 'fred',   'age': 40, 'active': false }
    

## find <img src="chrome.png">

   Array find(predicate, number fromIndex=0)

Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Arguments

    predicate: The function invoked per iteration.
    fromIndex: The index to search from.

Returns

    (*): Returns the matched element, else undefined.

Example
	

    var users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    
    users.find(o => o.age < 40);
    // { 'user': 'barney',  'age': 36, 'active': true }

## findIndex <img src="chrome.png">

   number findIndex(predicate)

This method is like [find](#find) except that it returns the index of the first element predicate returns truthy for instead of the element itself.

Arguments

    
    predicate: The function invoked per iteration

Returns

    (number): Returns the index of the found element, else -1.

Example
	

    var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
    ];
    
    users.findIndex(o => o.user == 'barney');
    // => 0
    
## findLast
   (*) findLast(predicate)

This method is like [find](#find) except that it iterates over elements of collection from right to left.

Arguments

    predicate: The function invoked per iteration

Returns

    (*): Returns the matched element, else null.

Example
	

    [1, 2, 3, 4].findLast(n=>n % 2 == 1);
    // => 3


## findLastIndex

   number findLastIndex(predicate)

This method is like [findIndex](#findindex) except that it iterates over elements of collection from right to left.

Arguments

    
    predicate: The function invoked per iteration

Returns

    (number): Returns the index of the found element, else -1.

Example
	

    var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
    ];
    
    users.findLastIndex(o==>o.user == 'pebbles');
    // => 2
    

## first

    first(predicate)

Returns

    (*): Returns the first element in a sequence that satisfies a specified condition.
	throws an exception if source contains no elements. To instead return a default value when the source sequence is empty, use the firstOrDefault method.


Example
	

    [1, 2, 3].first();
    // => 1
    
	try {
    [].first();
	}
	catch(e) {
	 console.log(e);
	 }
    // => Exception


## firstOrDefault


    firstOrDefault(predicate,defaultValue)


Returns the first element of a sequence that satisfies a specified condition, or a default value if no element is found.


    predicate:
    defaultValue:


Example

    var names = ["Hartono Tommy", "Adams Terry","Andersen Henriette Thaulow","Hedlund Magnus", "Ito Shu"];
    console.log(names.firstOrDefault(name => name.length > 20)); // "Andersen Henriette Thaulow"
    console.log(names.firstOrDefault(name => name.length > 200, "not found"));  // "not found"

## forEach
    forEach(action)

Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use forIn or forOwn for object iteration.


Arguments

    action : The function invoked per iteration.

Returns

    None.

Example
	

    [1, 2].forEach(function(value) {
        console.log(value);
    });
    // => Logs `1` then `2`.
    
 
## getRange

    Array getRange(number start, number end)

returns a new array whose elements are those of the original array between the start and end positions

Arguments
    
    start: start position in the array
    end: end position in the array

Returns

    a new array whose elements are those of the original array between the start and end positions

Example

    var a=[0,1,2,3,4,5,6,7,8,9];
    var b=a.getRange(5,8);
    console.log(a);  // [0,1,2,3,4,5,6,7,8,9]
    console.log(b);  // [5,6,7,8]

## groupBy

    Array groupBy(keySelector)


Groups the elements of a sequence.


Groups the elements of a sequence according to a specified key selector function and creates a result value from each group and its key. The elements of each group are projected by using a specified function.


Arguments

    keySelector : The iteratee to transform keys.


Returns

    (Object): Returns the composed aggregate object.

Example
	

    console.log([6.1, 4.2, 6.3].groupBy(Math.floor));
    /*
     [ { key: '4', elements: [ 4.2 ] },
       { key: '6', elements: [ 6.1, 6.3 ] } 
     ]
     */
	 

## includes <img src="chrome.png">
    boolean includes( (*) value, number fromIndex=0)

Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.

Arguments

    value: The value to search for.
    fromIndex: The index to search from.

Returns

    (boolean): Returns true if value is found, else false.

Example
	

    [1, 2, 3].includes( 1);
    // => true
    
    [1, 2, 3].includes(1, 2);
    // => false

## includesAll
    boolean includesAll(Array array)

Argument

    array : a array
Returns

    true if the array contains all value of array, else false

Example

    [1, 2, 3, "a", "b", "c"].includesAll([1, 2, 3, "a", "b", "c"]); // true
    [1, 2, 3, "a", "b", "c"].includesAll([1, 2, 3, "d", "a", "b", "c"]); // false


<a name="indexof"></a>

## indexOf <img src="js.png">

    number indexOf(any value, number fromIndex=0)

Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.

Arguments

    
    value (*): The value to search for.
    fromIndex: The index to search from.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [1, 2, 1, 2].indexOf(2);
    // => 1
    
    [1, 2, 1, 2].indexOf( 2, 2);
    // => 3

## innerJoin

    (this) innerJoin(Array array,string condition,[string] fields)

 Arguments
        
        array : the array to inner join
        condition: a left field = a right field
        fieds : array of field in right array to extends left array

Returns

        (Array): return a new array with fields of right array and left array whose matches with condition


Examples


    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "Alfred", value: 45 },
        { name: "Thomas", value: -12 },
        { name: "Paul", value: 13 },
        { name: "Tibo", value: 37 },
        { name: "Manuel", value: 38 }
    ];


    var jobTitle = [
        { name: "Sharpe", job: "technician", exp: "senior" },
        { name: "Edward", job: "ingenieer", exp: "junior" },
        { name: "Manuel", job: "florist", exp: "junior" },
        { name: "Paul", job: "electrician", exp: "senior" },
        { name: "Laurent", job: "builder", exp: "junior" },
    ];


    arr = items.innerJoin(jobTitle, "name=name", ["job", "exp"]);


    /* 
    [   { name: 'Edward', value: 21, job: 'ingenieer', exp: 'junior' },
        { name: 'Sharpe', value: 37, job: 'technician', exp: 'senior' },
        { name: 'Paul', value: 13, job: 'electrician', exp: 'senior' },
        { name: 'Manuel', value: 38, job: 'florist', exp: 'junior' } ] */


## insertAt



    (this) insertAt(number position, any value)


Insert a value at the position of the current array.
If position is greater than array length, then insert at last position.


Argument


    position: position where insert the value in the array
    value: the value to insert



Returns

    the current array with new values


Example


    var a=[7,8,9,10];
    a.insertAt(0,11);
    console.log(a); // [11,7,8,9,10]

    a.insertAt(50,12).insertAt(4,13);
    console.log(a); // [11,7,8,9,13,10,12]    




		
## insertRangeAt


    (this) insertRangeAt(number position, Array values)





Insert elements of values at the position of the current array.
If position is greater than array length, then insert at last position.


Argument

    position: position where insert the value in the array
    values: element of array to insert



Returns

    the current array with new values


Example


    var a=[7,8,9,10];
    
    a.insertRangeAt(2,[12,13,14,15,16]);
    console.log(a); // [7,8,12,13,14,15,16]    





## intersect

	intersect(second,comparer)


Produces the set intersection of two sequences by using the specified comparer to compare values.



	console.log("intersect", [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 8].intersect([9, 10, 1, 3]));  // [1,3]













## join <img src="js.png">


    string join(string separator=',')


Converts all elements in array into a string separated by separator.


Arguments


    separator: The string separator.


Returns


    (string): Returns the joined string.


Example
	

    ['a', 'b', 'c'].join('~');
    // => 'a~b~c'


















 

## last

    any last(predicate)

Returns the last element from a collection, or the last element that satisfies a condition.
last has two overload methods. One overload method doesn't take any input parameter and returns last element from the collection. Second overload method takes a lambda expression to specify a condition and returns last element that satisfies the specified condition.
method returns the last element from a collection, or the last element that satisfies the specified condition.If a given collection is empty or does not include any element that satisfied the condition then it will throw InvalidOperation exception.

Arguments

    predicate:
    

Returns

    (*): Returns the last element from a collection, or the last element that satisfies a condition.

Example
	

    console.log("last", [1, 2, 3, 4, 5, 2, 3, 8].last(x => x));
    console.log("last", [1, 2, 3, 4, 5, 2, 3, 8].last(x => x < 3));
    console.log("last", [1, 2, 3, 4, 5, 2, 3, 8].last());

## lastIndexOf

    number lastIndexOf(value, number fromIndex=array.length-1)

This method is like [indexOf](#indexof) except that it iterates over elements of array from right to left.

Arguments

    
    value: The value to search for.
    fromIndex: The index to search from.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [1, 2, 1, 2].lastIndexOf(2);
    // => 3
    
    // Search from the `fromIndex`.
    [1, 2, 1, 2].lastIndexOf(2, 2);
    // => 1

## leftJoin

    Array leftJoin(Array array,string condition,[string] fields)

 Arguments
        array : the array to left join

Returns

        (Array): return the current array with fields of right array whose matches with condition

Examples

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "Alfred", value: 45 },
        { name: "Thomas", value: -12 },
        { name: "Paul", value: 13 },
        { name: "Tibo", value: 37 },
        { name: "Manuel", value: 38 }
    ];

    var jobTitle = [
        { name: "Sharpe", job: "technician", exp: "senior" },
        { name: "Edward", job: "ingenieer", exp: "junior" },
        { name: "Manuel", job: "florist", exp: "junior" },
        { name: "Paul", job: "electrician", exp: "senior" },
        { name: "Laurent", job: "builder", exp: "junior" },
    ];

    var arr = items.leftJoin(jobTitle, "name=name", ["job"]);

    /*[ { name: 'Edward', value: 21, job: 'ingenieer' },
        { name: 'Sharpe', value: 37, job: 'technician' },
        { name: 'Alfred', value: 45 },
        { name: 'Thomas', value: -12 },
        { name: 'Paul', value: 13, job: 'electrician' },
        { name: 'Tibo', value: 37 },
        { name: 'Manuel', value: 38, job: 'florist' } 
    ]*/


## max

    max(selector,defaultValue)

Returns the maximum value in a sequence of values.

    var numbers = [9, 34, 65, 92, 87, 435, 3, 54, 83, 23, 87, 435, 67, 12,19];
    console.log(numbers.max(number => number)); // 435
    console.log(numbers.max()); // 435
    console.log([].max(x=>x,-50)); // -50

## min

    min(selector,defaultValue)

Returns the minimum value in a sequence of values.

    var numbers = [9, 34, 65, 92, 87, 435, 3, 54, 83, 23, 87, 435, 67, 12,19];
    console.log(numbers.min(number => number)); // 3
    console.log(numbers.min()); // 3
    console.log([].min(x=>x,-50)); // -50
 

## orderBy

    Array orderBy(keySelector,comparer)

sort the array according to the field keySelector

Arguments

    keySelector:
    comparer:

Returns

    (Array): Returns the new sorted array.

Example
	

    var users = [
        { 'user': 'fred',   'age': 48 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred',   'age': 40 },
        { 'user': 'barney', 'age': 36 }
    ];
    
     users.orderBy(x=>x.age);
    /*  [ 
        { 'user': 'barney', 'age': 34 },
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred',   'age': 40 },
        { 'user': 'fred',   'age': 48 },
    ] */

## orderByDescending

    Array orderByDescending(keySelector,comparer)

sort the array according to the field keySelector

Arguments

    keySelector:
    comparer:

Returns

    (Array): Returns the new sorted array.

Example
	

    var users = [
        { 'user': 'fred',   'age': 48 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred',   'age': 40 },
        { 'user': 'barney', 'age': 36 }
    ];
    
     users.orderByDescending(x=>x.age);
    /*  [ 
         { 'user': 'fred',   'age': 48 },
         { 'user': 'fred',   'age': 40 },
         { 'user': 'barney', 'age': 36 },
         { 'user': 'barney', 'age': 34 },
     ];*/


## push <img src="js.png"> 

	(this) push(value)
	
	push() adds one or more elements to the end of an array and returns the resulting length of the array.

Argument
	
	value: a value
	
Example	

    var myArray = new Array('1', '2');
	myArray.push('3'); // myArray is now ["1", "2", "3"]


## reduce <img src="js.png" />

    any reduce(Function iteratee=_.identity, any accumulator)

Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).


Returns

    (*): Returns the accumulated value.

Example
	

    [1, 2].reduce(function(sum, n) {
        return sum + n;
    }, 0);
    // => 3
    

 
## removeAll


    number removeAll(predicate)

Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike [filter](#filter), this method mutates array. 

Arguments

    predicate: The function invoked per iteration.

Returns

    Returns the number of removed elements.

Example
	

    var myArray = [1, 2, 3, 4,8,10,12,14];
    var nb = myArray.removeAll(n=>n % 2 == 0);
    console.log(array);
    // => [1, 3]
    
    console.log(nb);
    // => 6

## removeAt

    (this) removeAt(index)

Removes a element from array at position index

Returns

    Returns the array without removed element
    
Example

    var ints = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    console.log(ints.removeAt(5)); // [ 0,1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]
    console.log(ints); // [ 0,1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]

## removeRange

    (this) removeRange(index, count)

Remove elements from array between position index and index+count

Returns the array without deleted elements

Example

    var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    console.log(ints.removeRange(5, 5)); // [ 1, 2, 3, 4, 5, 11, 12]
    console.log(ints); // [ 1, 2, 3, 4, 5, 11, 12 ]

## replace

    (this) replace(any value,any newValue)

    Replace the element of the array whose match with value and replace by newValue

Argument    

    value: the value search for
    newValue: the value to replace with

Returns 

    the current array with replaced value

Example

    objs = [
        { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 },
        { x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: 40 },
        { x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }, { x: 4, y: 400 }
    ];

    console.log(objs.replace({ x: 1 }, { x: "one", y: 1, z: 1 }));
        
       /*
          [ { x: 'one', y: 1, z: 1 },{ x: 2, y: 2 },{ x: 3, y: 3 },{ x: 4, y: 4 },
            { x: 'one', y: 1, z: 1 },{ x: 2, y: 20 },{ x: 3, y: 30 },{ x: 4, y: 40 },
            { x: 'one', y: 1, z: 1 },{ x: 2, y: 200 },{ x: 3, y: 300 },{ x: 4, y: 400 } ]
    */

 
## reverse

    Array reverse(Array array)

Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

Note: This method mutates array and is based on reverse.

Arguments

    array (Array): The array to modify.

Returns

    (Array): Returns array.

Example
	

    var myArray = [1, 2, 3];
    
    myArray.reverse(array);
    // => [3, 2, 1]
    
    console.log(array);
    // => [3, 2, 1]


## slice <img src="js.png">

    Array slice(number start, number end=array.length)

Creates a slice of array from start up to, but not including, end.

Note: This method is used instead of slice to ensure dense arrays are returned.

Arguments

    start: The start position.
    end: The end position.

Returns

    (Array): Returns the slice of array.

Example
    
    var myArray = new Array('a', 'b', 'c', 'd', 'e');
    myArray = myArray.slice(1, 4); 
    // starts at index 1 
    // and extracts all elements until index 3, 
    // returning [ "b", "c", "d"]

## sort <img src="js.png">

    (this) sort(comparaison)

Argument

    comparaison: a comparaison fonction

Return

    current array sorted

Example

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 }
    ];
    items.sort( (a, b) => a.value - b.value);
    // [ { name: 'The', value: -12 },
    //  { name: 'Magnetic', value: 13 },
    //  { name: 'Edward', value: 21 },
    //  { name: 'Sharpe', value: 37 },
    //  { name: 'Zeros', value: 37 },
    //  { name: 'And', value: 45 } ]

 
 
## splice <img src="js.png">

    (*) splice(number index, number count_to_remove, (...any) newElements) 

removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

Example

    var myArray = new Array('1', '2', '3', '4', '5');
    myArray.splice(1, 3, 'a', 'b', 'c', 'd'); 
    // myArray is now ["1", "a", "b", "c", "d", "5"]
    // This code started at index one (or where the "2" was), 
    // removed 3 elements there, and then inserted all consecutive elements in its place.

 

## take

    Array take(number n=1)

Creates a slice of array with n elements taken from the beginning.

Arguments

    
    n: The number of elements to take.

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].take();
    // => [1]
    
    [1, 2, 3].take(2);
    // => [1, 2]
    
    [1, 2, 3].take(5);
    // => [1, 2, 3]
    
    [1, 2, 3].take( 0);
    // => []

 
## takeWhile
    Array takeWhile(Function predicate=_.identity)

Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

Arguments

    
    predicate: The function invoked per iteration.

Returns

    (Array): Returns the slice of array.

Example
	

    var users = [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true },
        { 'user': 'sabrina', 'active': false }
    ];

    var users4 = users.takeWhile(o => !o.active);
    console.log("takeWhile", users4);
    /*
    [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false }
    ]
    */

 ## union

    Array union(second, comparer)

Creates an array of unique values from all given arrays using comparer for equality comparisons.

Arguments

    second: The arrays to inspect
    comparer:the function comparer 2 items

Returns

    (Array): Returns the new array of combined values.

Example
	

    console.log("union", [2, 2, 2, 3].union([1, 2]));
    // => [2, 3,1]



