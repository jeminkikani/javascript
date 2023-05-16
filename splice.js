     //   -10, -9 ,-8 ,-7  ,-6  ,-5 ,-4  ,-3 -2,  ,-1
let arr =[10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90 ,100]
     //   1 , 2  ,3   ,4  ,5  ,6 ,7  ,8  ,9  ,10

// console.log(arr);   
// arr.splice(2)
// console.log(arr);   // [ 10, 20 ]

// console.log(arr.splice(2,5));   // [ 30, 40, 50, 60, 70 ]

// arr.splice(2,5,100,101)
// console.log(arr)        // [10, 20, 100, 101, 80, 90, 100]

console.log(arr)
arr.splice(2,4,101,102)
console.log(arr)

console.log(arr.splice(2,4,111,112))
console.log(arr)