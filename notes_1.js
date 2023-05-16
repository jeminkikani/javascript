// What is JavaScript?
// ->scripting language

// language
// 1. programming
// c,c++.....
// 2. scripting
// JS,VB
// 3. markup
//  HTML - XML

//

//1-03-2023 ---------------------------------------
// var , let , const

// var a=10; // declare int
// var a="skillqode"    //string 
// // console.log(a); //undefined
// console.log(a);

// console.log(10+10);
// var a='30';
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(+a+ +b); //3020
// + concate
// console.log(a-b); 
// console.log(a*b); 
// console.log(a%b); 

/*
            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword

*/

// let a=10; //globa;
// console.log(a);
// {
//     let a=100; //local
//     console.log(a);
// }
// console.log(a);

// var a=10; //globa;
// console.log(a);
// {
//     var a=100; //local
//     console.log(a);
// }
// console.log(a);

// const a; //'const' declarations must be initialized.
// const API_KEY=10;
// API_KEY=API_KEY*2; //TypeError : Assignment to constant variable.
// console.log(API_KEY);

// let a=10;
// let b='s';
// let c;
// c = a*b; //NaN - Not a Number
// console.log(typeof(c));
// console.log(c);

// ==  only value  
// ===   value + type  

// let val = 10n;
// console.log(typeof (val))
// let a;
// console.log(typeof (a))
// console.log(typeof (null))
// console.log(typeof (NaN))


// console.log(typeof "Hello");                  //string
// console.log(typeof 100);                      //number
// console.log(typeof true);                     //boolean
// console.log(typeof undefined);                //undefined
// console.log(typeof null);                     //object
// console.log(typeof []);                       //object
// console.log(typeof function () { });          //function
// console.log(typeof {});                       //object
// console.log(typeof 100n);                     //bigint
// console.log(typeof Symbol("Hello"));          //symbol
// console.log(typeof NaN);                      //Number

//undefined 
//null      
//NaN       

// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(null == null);
// console.log(null === null);

// console.log(undefined == NaN)
// console.log(undefined === NaN)

// console.log(undefined == null)
// console.log(undefined === null)

// console.log(NaN == null)
// console.log(NaN === null)



// 6-03-2023

//collection of "characters" called as "string"
//we will declare the string by using ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as "template literal"
//``(backtick) operator used to define the paragraphs (multiline strings)
// let my_string = `   C language
// C++
// javascript


// python
// react
// angular
// `
// console.log(my_string)
// let sub_one = "ReactJS";
// let sub_two = "NodeJS";
// let sub_three = "MongoDB";
// let mern_stack = `front end ${sub_one} , back end  .....${sub_two} , database ....${sub_three}`;
// console.log(mern_stack)
// let mern_stack =  "front end   " + sub_one + ", back end  " + sub_two + ", Database " + sub_three;
// console.log(mern_stack);



//boolean
//true / false
//true - 1
//false - 0

// var flag = true;
// var flag1 = false;


// console.log(flag);              true     
// console.log(flag1);             false   
// console.log(true + true);       2       
// console.log(true + false);      1       
// console.log(1 + true);          2       
// console.log(1 / true);          1       
// console.log(true / true);       1       
// console.log(true / false);      Infinity 
// console.log(true / "A");        NaN  

// -------------------------------------------------------------------------------
// 7/03/2023
// -------------------------------------------------------------------------------

//     function
//     ********
//         business logic called as function
//         functions are used to reuse the business logic
//         we have following types of functions upto "ES13"
//         1) named functions
//         2) anonymous functions
//         3) rest parameters in functions
//         4) default parameters in functions
//         5) optional parameters in functions
//         6) generators
//         7) constructor functions
//         8) IIFE  (Immidiate Invokable functivonal Expressions)


// named function
// **************
//     the function with the particular "name" called as named function
//     Syntax
//     ++++++
//     1) function definition
//     2) function calling

// function definition
// ------------------
//    function functionname(arg1,arg2,arg3,arg4,......argn){
//        business logic
//    }
// function calling
// ------------------
//    functionname(param1,param2,param3,param4,.....paramn);

// function fun_one(){
//      return "welcome to named functions";
// }
// console.log(fun_one());
// let str = fun_one();
// console.log(str);
// console.log(fun_one); //[Function: fun_one]




// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one("Angular15","NodeJS","MongoDB"); 
// fun_one("ReactJS","NodeJS");
// fun_one();
// fun_one(undefined, "NodeJS");
// fun_one(null, null, null);


// 2 - pizza rule

// function fun_one() {
//   return "Hello";
// }
// function fun_two() {
//   return fun_one();
// }
// console.log(fun_two());

// function fun_one() {
//   return "Hello";
// }
// function fun_two() {
//   return fun_one;
// }
// console.log(fun_two()());


// function fun_one() {
//   return "Hello";
// }
// function fun_two() {
//   return fun_one;
// }
// console.log(fun_two()()); //fun_one()
// console.log(fun_two());


// ------------------------------

// square
// cube
// Real-Life-Example

// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1(), arg2(), arg3());
// }
// function fun_two() {
//   return "Hello_1";
// }
// function fun_three() {
//   return "Hello_2";
// }
// function fun_four() {
//   return "Hello_3";
// }
// fun_one(fun_two, fun_three, fun_four);


// var fun_one = "Hello_1";
// var fun_one = function(){return "Hello_var"};

// function fun_one() {
//   return "Hello_2";
// }
// console.log(fun_one());



// function fun_one() {
//   return var_one;
// }
// console.log(fun_one());

// var var_one = "Hello_1";
// console.log(fun_one());

// function fun_one() {
//   var var_one = "Hello_1";
// }
// fun_one();
// console.log(var_one);

//     anonymous functions
//     *******************
//         - the function without name called as anonymous function
//         - anonymous functions also called as "arrow" functions/"lamda" functions/"callback" functions
//         - we will represent arrow functions with "=>"
//         - "=>" introduced in ES6

// 
// Syntax:
// ******
//     1) function definition
//     2) function calling
//     function definition
//     *******************
//     var/let/const variablename = (arg1,arg2,arg3,....argn)=>{
//         //business logic
//     }
//     function calling
//     ****************
//     variablename(param1,param2,param3,.....paramn);

//Arrow function
// let fun_one = () => {return "welcome to arrow functions fun_one() "};
// console.log(fun_one());

// let fun_two = () =>  "welcome to arrow functions fun_two()";
// console.log(fun_two());

// // Anonymous function
// let fun_three = function(){ return "hello" };
// console.log(fun_three());

// 13-03-2023
/*
    array
    *****
        collection of "elements" called as "array"
        index starts from "0"
        []
*/
// let arr = [10, 20, "thirty", 40, "50", 60, "70", 80, 90, 100];
// console.log(typeof arr);

// console.log(arr);
// console.log(arr[0]);
// console.log(arr['0']);

// Object - Key : value
// console.log(arr[3.0]);

// console.log(arr[3.1]);
// arr[3.1] = 45;
// console.log(arr[3.1]);
// console.log(arr);
// arr["A"] = 110;
// console.log(arr);

// console.log(arr[4][0]);
// console.log(arr.length);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr[-1]);
// console.log(arr[5], arr[100]);

//length
// The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);
// let arr1 = [10, 20]; //
// arr1[2] = 30;
// console.log(arr1.length);
// arr1[10] = 1000;
// console.log(arr1.length);
// console.log(arr1);
// arr1[4] = 44;
// arr1[6] = undefined;

// console.log(arr1);


//delete
//delete the particular

// If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator.
// let b;

// let arr = [10, 20, 30, 40, 50];

// console.log(arr.length);
// delete arr[4];
// console.log(arr.length);
// console.log(arr);

// delete arr[0];
// console.log(arr);
// arr[7] = undefined;
// arr[4] = undefined;
// delete arr[7];
// console.log(arr.length);

//push() -> last  insert 
//pop() -> last delete
//unshift() -> first insert 
// shift() -> first delete
// let arr = [20, 30, 40];
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(10);
// arr.unshift(1);

// console.log(arr);
// arr.shift();
// console.log(arr);


// 15-03-2023

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

//splice()
// ->
// 0    1   2   3   4   5   6   7   8   9
// 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
// -10  -9  -8  -7  -6  -5  -4  -3  -2  -1
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(arr)
// arr.splice(2,4,101,102) 
// console.log(arr.splice())

// console.log(arr.splice(2))
// console.log(arr.splice(-4))  //[ 70, 80, 90, 100 ]
// console.log(arr.splice(-2))

// console.log(arr.splice(2,4))
// console.log(arr.splice(2,6))
// console.log(arr.splice(-6,5))
// console.log(arr.splice(-10,5))
// console.log(arr.splice(-10,0))
// console.log(arr.splice(2,0))



// arr.splice(2, 3, 11, 12, 13);
// console.log(arr)

// arr.splice(-4, 3, 11, 12, 13);
// arr.splice(4, 3);///start from 4 and delete 3 element
// console.log(arr);
// arr.splice(-2);
// arr.splice(6, 1);
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(2, 3, 11, 12, 13);
// console.log(arr);
// arr.splice(1, 0, 30);
// console.log(arr);
// arr.splice(0, 1, 11, 22);
// console.log(arr);
// arr.splice(9, 0, 100);
// console.log(arr);
// arr.splice(1);
// console.log(arr.splice(1));
// console.log(arr);

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//10, 20, 30, 40, 50, 60, 70, 80, 90, 100
//                       -4  -3   -2   -1
// arr1.splice(-4, 2);
// console.log(arr1);

// arr1.splice(-4, -2);
// console.log(arr1);


// 16-03-2023

// Shallow copy
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

// Deep copy
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// aliasing

//slice()

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr2 =arr1.slice()
// arr2 =arr1
// arr2  =arr1.slice(3)
// arr.slice(3)
// arr1.push(200)
// arr2.push(300)
// console.log(arr1);
// console.log(arr2);
// console.log(arr.slice(3));

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// slice()
// slice(start)
// slice(start, end)

// console.log(arr1.slice());
// console.log(arr1.slice(2));
// console.log(arr1.slice(-6));
// console.log(arr1.slice(3, 8));
// console.log(arr1.slice(-7, -2));
// console.log(arr1.slice(3, -2));
// console.log(arr1.slice(-9, 4));
// console.log(arr1.slice(3, -9));
// console.log(arr1.slice(5,2));


// --------------------
// Function 22-03-2023
// --------------------
// default parameters in functions
// *******************************
//     while defining the functions, we will initilize arguments with default values
//     this concept introduced in ES6

// function fun_one(arg1 = "Hello_1", arg2 = "Hello_2", arg3 = "Hello_3") {
//   console.log(arg1, arg2, arg3);
// }
// fun_one();
// fun_one("H_1", "H_2", "H_3");
// fun_one("Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4");
// fun_one(undefined, undefined, undefined);
// fun_one(null, null, null);
// fun_one(undefined, undefined, "H_3");


// rest parameters in functions
// ****************************
//     by using rest parameter, we can hold/store more than one value
//     ES6
//     we will represent rest parameter with "..." operator
//     "..." operator called as spread operator
//     we can have only "one" spread operator per function
//     position of spread operator should be last in occurances
// A rest parameter must be last in a parameter list.

// function fun_one(...arg1) {
//   console.log(arg1);
// }
// fun_one();
// fun_one("Hello_1");
// fun_one("Hello_1", "Hello_2");
// fun_one("Hello_1", "Hello_2", "Hello_3");
// fun_one(undefined, undefined);
// fun_one(undefined, null);

// function fun_one(...arg1,arg2) {
//   console.log(arg1);
//   console.log(arg2);
// }
// fun_one("Hello_1", "Hello_2");
// fun_one("Hello_1", "Hello_2", "Hello_3");
// fun_one(undefined, undefined);

// function fun_one(...arg1,...arg2){

// }; //not valid

// function fun_one(arg1, arg2 = "Hello_2", ...arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one();
// fun_one("Hello_1", undefined, "Hello_3", "Hello_4");
// fun_one(undefined, undefined, undefined);
// fun_one(null, null, null);



// --------------------
// Function 23-03-2023
// --------------------

// IIFE
//     Immidiate Invokable Functional Expression
//     ES9
//     when ever we create the functions, automatically it will be invoked
//     Syntax
//     ******
//     ((arg1,arg2,arg3,....argn)=>{
//         business logic
//     })(param1,param3,param3,....paramn);

// (()=>{
//     console.log(" Hello ")
// })();

// ((a,b)=>{
//     console.log(a+b)
// })(10,20);

// let a = [12];
// // console.log(a);

// a.push(() => {
//   console.log("IIFE");
//   return "no phone"
// });

// console.log(a);
// console.log(a[1]());
// //IIFE

// ((arg1, arg2, arg3) => {
//   console.log(arg1, arg2, arg3);
// })("Hello_1", "Hello_2", "Hello_3");
//Hello_1 Hello_2 Hello_3

// let x = () => {
//     console.log(" Clear ")
//     console.log(" SkillQode")
//     return " from x "
// }
// ((arg1, arg2, arg3) => {
//     console.log(arg1(), arg2, arg3);
// })(x, (() => { console.log(" Confusion ") })());


// Generators
// **********
// - Generators "controls" the "flow" of execution
// - Generator functions prefix with "*"
// - all the statements in functions prefix with "yield" keyword
// - ES9
// - Generators returns "cursor" mechanism
// - through "cursor", we will control "flow" of execution
// - 4 person  4 work 
// - 1 person  4 work
// Yogi Chawk
// city center      Crystal       
// 304              208    
// 65 L             65 L
// 40K              20k
// 65K 

// function *fun_one(){
//     yield "hello_1";
//     // yield "hello_2";
//     // yield "hello_3";
//     // yield "hello_4";
//     // yield "hello_5";
// }
// let cursor = fun_one();
// console.log(cursor);

// // console.log( cursor.next() );
// // console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );

// function *fun_one(){
//     yield "Hello_1";
// }
// function *fun_two(){
//     yield "Hello_2";
// }
// function *main(){
//     yield *fun_one();
//     yield *fun_two();
//     yield "Hello_3";
// }
// let cursor = main();
// for(let i=0;i<4;i++){
//     console.log( cursor.next() );
// }


// ********************
// 28-03-2023 for /array copy
// ********************

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let newArr1 = arr2;   //
// newArr1.push(100);
// console.log(arr2)

// let newArr2 = [...arr1,...arr2]; //
// let newArr2 = [...arr2,...arr1]; //
// let newArr2 = [...arr1,arr2];
// console.log(newArr2[3][0])
// let newArr2 = [1,2,3,...arr1,100,200];
// let newArr2 = [1,2,3


// The for loop:

// for (let index=0; index < someArray.length; index++) {
//   const elem = someArray[index];
//   // ···
// }

// The for-in loop:
// for (const key in someArray) {
//   console.log(key);
// }

// The Array method .forEach():
// someArray.forEach((elem, index) => {
//   console.log(elem, index);
// });

// The for-of loop:
// for (const elem of someArray) {
//   console.log(elem);
// }

// Example

// const arr = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i in arr) {
//   console.log(arr[i]);
// }


// arr.forEach(() => {});

// arr.forEach((v, i, a) => console.log(`${i} - ${v} - ${a}`));

// for (let v of arr) {
//   console.log(v);
// }

// ****************************************
// 29-03-2023 callback promise async await
// ****************************************
// sync
// console.log("I");
// console.log("eat");
// console.log("ice-cream");

// async
console.log("I");
setTimeout(()=>{
    console.log("eat");
},1000)
console.log("ice-cream");

// callback
function fun_one()
{
    console.log("func_one")
}
function fun_two(funOne)
{
    console.log("func_two")
    funOne();
}
fun_two(fun_one);

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (call_production) => {
    console.log(`Order placed. fruit selected ${stocks.Fruits[0]}`)
    setTimeout(()=>{
        call_production();
    },1000)
};
let production = () => {
    setTimeout(()=>{
        console.log("Production has started")
        setTimeout(()=>{
            console.log("Fruits chopped.... ")
            setTimeout(()=>{
                console.log("Add water and ice ... ")
                setTimeout(()=>{
                    console.log("bhmmmmmmmmmm..... ")
                    setTimeout(()=>{
                        console.log(`select container ${stocks.holder[0]}`)
                        setTimeout(()=>{
                            console.log(`add ${stocks.toppings[0]}`)
                            setTimeout(()=>{
                                console.log(`serve ice-cream `)
                            },1000)    
                        },1000)
                    },1000)
                },2000)
            },1000)
        },2000)
    },0)
};
order(production)


// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending  : initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected : meaning that the operation failed.

// let is_shop_open = true;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }
//         else {
//             reject(console.log("Our shop is closed"))
//         }
//     })
// }

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//     .then(() => {
//         return order(0000, () => console.log('production has started'))
//     })
//     .then(() => {
//         return order(2000, () => console.log("Fruit has been chopped"))
//     })
//     .then(() => {
//         return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//     })
//     .then(() => {
//         return order(1000, () => console.log("start the machine"))
//     })
//     .then(() => {
//         return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//     })
//     .then(() => {
//         return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//     })
//     .then(() => {
//         return order(2000, () => console.log("Serve Ice Cream"))
//     })



// function add(num, callBack) {
//     return callBack(num + 5, false)
// }
// function sub(num, callBack) {
//     return callBack(num - 3, false)
// }
// function mul(num, callBack) {
//     return callBack(num *2, false)
// }
// function div(num, callBack) {
//     return callBack(num /2, false)
// }

// add(5, (addRes, error) => {
//     if (!error) {
//         sub(addRes, (subRes, error) => {
//             if (!error) {
//                 mul(subRes, (mulRes, error) => {
//                     if (!error) {
//                         div(mulRes, (divRes, error) => {
//                             if (!error) {
//                                 console.log(divRes);
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });