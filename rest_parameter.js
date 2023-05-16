// by using rest parameter ,we can hold / store more than one value ES6
// we will represent rest paramter with "..." operator "..." operator called as spread operator we can have only "one" spread oprator per function
// postion of spread oprator should be last in occurness

// a rest parameter must be last in a parameter list 

// function fun_one(...arg1){
//     console.log(arg1)
// }
// fun_one();
// fun_one("hello_1");
// fun_one("hello_1","hello_2");
// fun_one("hello_1","hello_2","hello_3");
// fun_one(undefined,undefined);
// fun_one(undefined,null);




// function fun_two(...arg1,arg2){
//     console.log(arg1);
//     console.log(arg2);
// }

// fun_two("hello_1","hello_2");
// fun_one("hello_1","hello_2","hello_3");
// fun_one(undefined,undefined);
//                                        NOT VALID

// function fun_two(...arg1,...arg2){
    //     console.log(arg1);
    //     console.log(arg2);
    // }            
    //                                         NOT VALID 
    

function fun_three(argc1,arg2="hello_2",...arg3){
    console.log(arg1,arg2,arg3);
}

fun_three()
fun_three("hello_1",undefined,"hello_3","hello_4");
fun_three(undefined,undefined);
fun_three(undefined,null);
