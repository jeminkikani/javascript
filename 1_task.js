// ----------- [1] ------------- 
// function combination(str){ 
//     var listofstring=[]; 
//     for(var i=0 ; i<str.length ; i++){ 
//         for(var j=i+1 ; j<str.length+1 ; j++){ 
//             listofstring.push(str.slice(i,j)) 
//         } 
//     } 
//     return listofstring 
// } 
// console.log(combination("dog")) 



// -------------- [3] ----------------- 
function capitalize(str)
{ 
    let words=str.split(" "); 
    for (let i=0 ; i<words.length ; i++) 
    { 
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1); 
    } 
    return words.join(" "); 
  } 
console.log(capitalize("i learn python from skillqode"));  


// ------------- [4] -------------------- 
// function LongestWord(str){ 
//     var strSplit=str.split(' '); 
//     var longestWord=0; 
//     for(var i=0 ; i<strSplit.length ; i++){ 
//         if(strSplit[i].length>longestWord){ 
//             longestWord = strSplit[i].length; 
//         } 
//     } 
//     return longestWord; 
// } 
// console.log(LongestWord("web development tutorial")); 


// --------------- [5] ------------------------ 
// vowel number 


// --------------- [6] -------------------- 
function prime(n) {
  if (n === 1) {
    return console.log("not a prime");
  }
  else if (n === 2) {
    return console.log("its prime");
  }
  else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return console.log("not a prime");
      }
    }
    return console.log("its prime");
  }
}
console.log(prime(5));


// ---------------- [7] -------------------