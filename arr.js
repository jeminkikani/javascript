let arr = [10, 20, "30", 40, "fifty", 60, 70, "80", 90, 100]
console.log(arr);
console.log(arr[4]) // fifty
console.log(arr[4], [5]) // fifty , [5]
console.log(arr['2']) // 30

console.log(arr[4.1]) // undefined
arr[4.1] = 50
console.log(arr[4.1]) // 50

console.log(arr['A']) // undefined
arr["A"] = 'seven'
console.log(arr['A']) // seven

console.log(arr[4], [5]) // fifty , [5]
console.log(arr.length)

console.log(arr[11]) // undefined
arr[11] = 12
console.log(arr[11]) // 12

console.log(arr);
console.log(arr.length) // length is an 12 


// the length property of an object which is an instance of array sets of return the number of elements in that array
// length is not a function its an porperty





