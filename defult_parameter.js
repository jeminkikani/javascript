// default parameter in functon
// while defining function we will intialize argument with default values this concept introduced in ES6

function fun_one(arg1="hello_1",arg2="hello_2",arg3="hello_3"){
    console.log(arg1,arg2,arg3)
}
fun_one();
fun_one("h_1","h_2")
fun_one("welcome1","welcome2","welcome3")
fun_one(undefined,undefined,undefined)
fun_one(null,null,null)
fun_one(undefined,undefined,"H3")


