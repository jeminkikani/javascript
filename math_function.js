// // JavaScript : Math.abs()
// function cal(a, b) 
// {
//     return Math.abs(a + b);
// }
// console.log(cal(3, 5));     // output 8



// // cbrt 
// console.log(Math.cbrt(64));    // output 4 


// // ceil 
// console.log(Math.ceil(.95));      //  output 1
// console.log(Math.ceil(7.4));      //    output 8
// console.log(Math.ceil(7.9));      //  output 



// // floor
// console.log(Math.floor(5.95));    //  output 5
// console.log(Math.floor(5.05));   // output 5
// console.log(Math.floor(5));      // output 5
// console.log(Math.floor(-5.05));  // output: -6


// // Math.max()
// console.log(Math.max(1, 3, 2));  // output: 3
// console.log(Math.max(-1, -3, -2));  // output: -1

// let array1 = [1, 3, 2,5];
// console.log(Math.max(...array1));  // output: 3


// //  math.min()
// console.log(Math.min(2, 3, 1));     // output: 1
// console.log(Math.min(-2, -3, -1));    // output: -3

// let array1 = [2, 3, 1];
// console.log(Math.min(...array1));       // outtput: 1


// // Math.pow()
// console.log(Math.pow(7, 3));// output: 343
// console.log(Math.pow(4, 0.5));  // output: 2
// console.log(Math.pow(4,8));    // output: 0.02040816326530612 // (1/49)
// console.log(Math.pow(-7, 0.5));   // output: NaN


// // Math.random()
// function rand(max) 
// {
//     return Math.floor(Math.random() * max);
// }
// console.log(rand(13));    // output: 0, 1 or 2
// console.log(rand(10));    // output: 0
// console.log(Math.random());  // output: a number from 0 to <1
  

// Math.round()
// The Math.round() method rounds a number to the nearest integer. 2.49 will be rounded down (2), and 2.5 will be rounded up (3)

// console.log(Math.round(0.9));  // output: 1
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));  // output: 6 6 5
// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));  // output: -5 -5 -6


//  Math.sqrt()
// function cal(a, b) 
// {
//   return (Math.sqrt((a * a) + (b * b)));
// }
// console.log(cal(3, 4));   // output: 5
// console.log(cal(5, 12));  // output: 13
// console.log(cal(-7, -8 ));   // output: 10.63


// Math.trunc()
// trunc() method returns the integer part of a number. The Math. trunc() method removes the decimals (does NOT round the number).
console.log(Math.trunc(13.37));   //  output: 13
console.log(Math.trunc(42.84));  // output: 42
console.log(Math.trunc(0.123));  // output: 0
console.log(Math.trunc(-0.123));  // output: -0



