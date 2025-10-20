const score = 300
// console.log(score);  // here compiler automatically assumes it is a number datatype

const newScore = new Number(100)  // here we specify that given datatype is Number
console.log(newScore);

// Use of methods ,related to number datatype
// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));   // returns in string form

const otherNumber = 123.387
// console.log(otherNumber.toPrecision(4));  // returns in string form

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));  // used to represent the number in Indian Number System format




console.log(parseInt("42"));
console.log(parseInt("42djhisu"));
console.log(parseInt("dnkjne42"));
console.log(parseInt("3.14"));




// *********************** Maths **********************
// console.log(Math.abs(-23));
// console.log(Math.round(23.4));
// console.log(Math.ceil(23.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(2,3,6,4,0));
// console.log(Math.max(2,5,9,3,6));


console.log(Math.random());// generates decimal number between (0 <= n <= 1)
const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);