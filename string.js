// // // charAt()
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 4;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// // Expected output: "The character at index 4 is q"


// // concat()
// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// // Expected output: "World, Hello"





// // includes()
// const sentence1 = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';

// console.log(`The word "${word}" ${sentence1.includes(word,) ? 'is' : 'is not'} in the sentence`);
// // Expected output: "The word "fox" is in the sentence"




// // indexOf()
// ph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = ph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// // Expected output: "The index of the first "dog" from the beginning is 40"

// console.log(`The index of the 2nd "${searchTerm}" is ${ph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// // Expected output: "The index of the 2nd "dog" is 52"





// // String.lastIndexOf()
// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const searchTerm1 = 'dog';

// console.log(`The index of the first "${searchTerm1}" from the end is ${paragraph.lastIndexOf(searchTerm1)}`);
// // Expected output: "The index of the first "dog" from the end is 52"





// // String.match()
// const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph1.match(regex);

// console.log(found);
// // Expected output: Array ["T", "I"]


// /[a-z]/

// // String.matchAll()
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]






// // String.padStart()
// const str3 = '5';
// console.log(str3.padStart(2, '0'));
// // Expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// Expected output: "************5581"



// // String.padEnd()
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.'));
// // Expected output: "Breaded Mushrooms........"

// const str2 = '200';

// console.log(str2.padEnd(5));
// // Expected output: "200  "




// // String.replace()
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));
// // Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


// const regex1 = /Dog/i;
// console.log(p.replace(regex1, 'ferret'));
// // Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"




// String.replaceAll()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
 
console.log(p.replaceAll('dog', 'monkey'));                                              
// // Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// Global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"



// // String.split()
// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]




// // String.substring()
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"




// // String.substr()
// const str = 'Mozilla';

// console.log(str.substr(1, 2));
// // Expected output: "oz"

// console.log(str.substr(2));
// // Expected output: "zilla"



// String.toLowerCase()
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.toLowerCase());
// // Expected output: "the quick brown fox jumps over the lazy dog."



// // String.toUpperCase()
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.toUpperCase());
// // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."



// // String.toString()
// const stringObj = new String('foo');

// console.log(stringObj);
// // Expected output: String { "foo" }

// console.log(stringObj.toString());
// // Expected output: "foo"



// // String.trim()
// const greeting = '   Hello world!   '
// console.log(greeting)
// // Expected output: "   Hello world!   ";
// console.log(greeting.trim());
// // Expected output: "Hello world!


// // String.trimEnd
// const greeting = '   Hello world!   '
// console.log(greeting)
// // Expected output: "   Hello world!   ";

// console.log(greeting.trimEnd());
// // Expected output: "   Hello world!";



// // String.trimStart()
// const greeting = '   Hello world!   ';
// console.log(greeting);
// // Expected output: "   Hello world!   ";


// console.log(greeting.trimStart());
// // Expected output: "Hello world!   ";








