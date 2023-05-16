let arr =[10, 20, 30]
console.log(arr.length);           // 3
arr.push(40)
console.log(arr);                   // [ 10, 20, 30, 40 ]
console.log(arr.length);            // 4
arr.pop()
console.log(arr);                 // [ 10, 20, 30 ]   
console.log(arr.length);         // 3  
arr.unshift(11)
console.log(arr);                // [ 11, 10, 20, 30 ]
console.log(arr.length);         // 4
arr.shift()
console.log(arr);                // [ 10, 20, 30 ] 
console.log(arr.length);        // 3

delete arr[2]
console.log(arr.length)         // 3
console.log(arr);               // [ 10, 20, <1 empty item> ]