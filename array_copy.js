// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70,80];

// let newarr = arr2;          // alyasiy value
// newarr.push(100)
// console.log(arr2);
// console.log(newarr);

// let newarr1 =[...arr1,...arr2];
// console.log(newarr1);
// console.log(newarr1[2]);
// let newarr2 =[...arr2,...arr1];
// console.log(newarr2);
// console.log(newarr2[4]);
// let newarr3 =[1,2,3,...arr1,100,200]
// console.log(newarr3);
// let newar4 =[...arr2,arr1];
// console.log(newar4);
// console.log(newar4[4]);

// the for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// for in loop
// for (const key in somearray) 
// {
//     console.log(key);        
// }


// for each loop
// somearray.forEach((element,index) => {
//     console.log(element,index);
// });


// for of loop
// for (const element of somearray) {
//     console.log(element);
// }


// example

const Arr =["a","b","c","d","e"] 

for (let index = 0; index < Arr.length; index++) {
    console.log(Arr[index]);   
}

for (const key in Arr) {
        console.log(key);
        console.log(Arr );
    }

Arr.forEach((index,value,element) => {  console.log(`${index} - ${value} - ${element}`)  });

for (const value of Arr) {
    console.log(value)
}
