// // //  Array.at() 
// // // The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
// const array1 = [5, 12, 8, 130, 44];

// let index = 2;
// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// // Expected output: "Using an index of 2 the item returned is 8"
// index = -2;
// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// // Expected output: "Using an index of -2 item returned is 130"



// // Array.concat() 
// // The concat() method is used t o merge two or more arrays. 
// const array = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]


// // Array.copyWithin()
// // The copyWithin() method copies array elements to another position in the array. The copyWithin() method overwrites the existing values. The copyWithin() method does not add items to the array.
// const array4 = ['a', 'b', 'c', 'd', 'e'];
// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]



// // Array.fill()
// // const array1 = [1, 2, 3, 4];
// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// // Expected output: Array [6, 6, 6, 6]


// // Array.findIndex()
// The findIndex() method returns the index of the first element in an array that satisfies
// the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const array1 = [10, 20, 30, 40, 50];
// const isLargeNumber = (element) => element < 13 & element < 13;
// console.log(array1.findIndex(isLargeNumber));
// // Expected output: 3


// // Array.findLast()
// const array1 = [10, 20, 30, 40, 50];
// const found = array1.findLast((element) => element < 40);
// console.log(found);


// // Array.findLastIndex()
// const array1 = [10, 20, 30, 40, 50];
// const isLargeNumber = (element) => element > 10;

// console.log(array1.findLastIndex(isLargeNumber));
// // Expected output: 4
// // Index of element with value: 50


// Array.indexOf()
// const beasts = ['jemin', 'denil', 'deep', 'kunj', 'dikshit'];
// console.log(beasts.indexOf('dikshit', 0));
// // Expected output: 4

// // Start from index 2
// console.log(beasts.indexOf('kunj', 0));
// // Expected output: 3

// console.log(beasts.indexOf('kunj'));
// // Expected output: 3


// Array.isArray()
// console.log(Array.isArray([1, 3, 5]));
// // Expected output: true

// console.log(Array.isArray('[]'));
// // Expected output: false

// console.log(Array.isArray(new Array(5)));
// // Expected output: true

// console.log(Array.isArray(new Int16Array([15, 33])));
// // Expected output: false



// Array.join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"



// Array.lastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1



// Array.toString()
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Expected output: "1,2,a,1a"






































let jemin  = 'company_CEO'
let kartik = 'HR'
let dikhshit = 'node.js_devloper' 
let rutvik = 'flutter_devloper'
let tushar = 'flutter_devloper'
let rushit = 'employee'

console.log(`jemin    :-  ${jemin}`);
console.log(`kartik   :-  ${kartik}`);
console.log(`dikhshit :-  ${dikhshit}`);
console.log(`rutvik   :-  ${rutvik}`);
console.log(`rushit   :-  ${rushit}`);
console.log(`jemin   :-  ${jemin}`);
