var a=10; // global varibal declaration
console.log(a);
{
    var a=100;   // local varibal declartion
    console.log(a);
}
console.log(a);  // local varibal value 

// out put 
// 10
// 100
// 100