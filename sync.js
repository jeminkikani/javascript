// console.log("I")
// console.log("eat")
// console.log("Ice-Cream")




// async 
// console.log("I");
// setTimeout(() =>{
//     console.log("eat");
// },1000)
// console.log("Ice-Cream");


// callback 
function fun_one(){
    console.log("jemin")
}
function fun_two(fun_one){
    console.log("harshit");
    fun_one();
}
fun_two(fun_one);