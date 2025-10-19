/* In JavaScript String is an Object used to represent or manipulate a sequence of characters .
 In javascript we can create string using two ways : 1) Using String Primitives 2) Using String Objects*/

 //Using String Primitives (literals)
const name = 'hbjhvhb' // we can also use double quotes 
const value = 3
console.log(`Hello my name is ${name} and i have ${value} books.`); // we use this syntax to concadinate strings called string interpolation

// We can also create strings using objects( that is using String() constructor.)
//Using String Objects
const str1 = new String('A new string object')
// console.log(typeof name);  // returns string
// console.log(typeof str1);  // returns object 

// When we create string then we can have lots of methods related to it and we can access it using dot operator. 
// console.log(str1.length);
// console.log(str1[2]);
// console.log(str1.toUpperCase());
// console.log(str1.charAt(3));
// console.log(str1.indexOf('w'));

const str2 = str1.substring(0,5)
// console.log(str2);

const str3 = str1.slice(-18,16)
// console.log(str3);

const str4 = "      JavaScript       "
console.log(str4);
console.log(str4.trim());   // used to remove whitespaces

const url = "https://google.com/javascript%20documentation"
console.log(url.replace('%20','-'));
console.log(url.includes('javajhw'));// checks whether given text is present or not 

console.log(str1.split(' ')); // converts into array by splitting according to given symbol or information




//**************** Refer MDN Docs************ */