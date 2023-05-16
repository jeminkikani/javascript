 //        -10, -9 ,-8 ,-7  ,-6  ,-5 ,-4  ,-3 -2,  ,-1
 let arr =[10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90 ,100]
 //        0 , 1  ,2   ,3  ,4  ,5 ,6  ,7  ,8  ,9

console.log(arr)    
console.log(arr.slice(3))       // 40, 50,  60, 70, 80, 90, 100   


arr.slice(3)
console.log(arr)     // 10, 20, 30, 40,  50, 60, 70, 80, 90, 100 

console.log(arr.slice(3,8)) // [ 40, 50, 60, 70, 80 ]

console.log(arr.slice(-3,8)) // [ ]

console.log(arr.slice(3,-8)) // [ 80 ]

console.log