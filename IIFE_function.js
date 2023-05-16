// Immediately Invoked Function Expressions
// ES9 introduced
// when ever we create the function automatcally called it will be invoked

// syntax 
// ((arg1,arg2,arg3) =>{
//     business logic
// })(arg1,arg2,arg3)

// ( () => {
//     console.log("hello")
// })()

( (a,b) => {
    console.log(a+b);

})(10,20)

// let a = [10]
// a.push( () => {
//     console.log("no phone")
//     return a
// });

// console.log(a[1]())

const x = () => {
    console.log("clear") 
    console.log("skillqode")
    return "from x"
}


((arg1, arg2, arg3) => {
    console.log(arg1(), arg2, arg3)
})

( x, (() => { console.log("confusion.....")}))                              



// jason 
// File
// is 
// ready 



