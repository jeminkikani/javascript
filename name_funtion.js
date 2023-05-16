// var fun_one = "hello_1"; // do not print this ERROR!!!!!.....
// let fun_one = "hello_1"; // do not print this ERROR!!!!!.....
// const fun_one = "hello_1"; // do not print this ERROR!!!!!.....

function fun_one()
{
    return "hello_@";
}
function fun_2()
{
    return fun_one()
}
console.log(fun_2());


// named
// function fun_1()
// {}