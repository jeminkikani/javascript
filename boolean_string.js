let sub_one = 'hello'
console.log(sub_one)

function fun_one(){
    return 'hello'
}

function fun_two(){
    return fun_one()
}

console.log(fun_two())

