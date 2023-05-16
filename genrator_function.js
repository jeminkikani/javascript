// Genrator
// genrators "controls" the "flow" of execution 
// genrator function prefix with  "*"
// ES9
// all the statements in functions prefix with "yield" keyword
// genrator returns "any varibal name" micanisum 
// // throw "any variable name", we will control "flow" of execution



function *jemin(){
    yield "hello_jemin"     
    yield "hello_jemin_1"
    yield "hello_jemin_2"
    yield "hello_jemin_3"
    yield "hello_jemin_4"
}

let k = jemin()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

// for (let index = 0; index < 5; index++) {
//     console.log(k.next());
    
// }

function *jay(){
    yield "hello_1"
}

let a = jay()          

console.log(a.next());


function *denil(){
    yield "hello_denil"
}
function *deep(){
    yield "hello_deep"
}
let d= deep()
function *sujal(){
    yield "hello_sujal"
    yield *denil();
    yield *d;
}

let z = sujal()

    for (let index = 0; index < 3; index++) {
        console.log(z.next());
        
    }


    // function *wait(){
    //     yield *k;
    //     yield *a;
    //     yield *d;
    // }
    // let v = wait()
    // for (let index = 0; index < 3; index++) {
    //     console.log(v.next());
        
    // }

    // function *harsh()
    // {
    //     yield*v
    // }
    
    const gm='good morning'
    console.log(`hy ${gm}`)