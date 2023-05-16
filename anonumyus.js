const x = () => {
    console.log("clear") 
    console.log("skillqode")
    return "from x"
} 



((arg1, arg2, arg3) => {
    console.log(arg1(), arg2, arg3)
})

( x, (() => { console.log("confusion.....")}))
