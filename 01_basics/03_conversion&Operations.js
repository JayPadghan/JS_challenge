// **************** Conversion ********************
let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score)); // we can also use typeof in this way

// let valueInNumber = Number(score);  // converting string to number
// console.log(typeof valueInNumber);  // it will show the output as number but actually it is Not A Number (NaN)
// console.log(valueInNumber);  // shows (NaN)


// Below is the output of conversion of particular datatypes to number datatypes.
// "33" --> 33
// "33abc" --> NaN
// true --> 1  ; false --> 0
// undefined -->  NaN
// null --> 0

let isLoggedIn = 8//
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*On conversion from particular datatypes to boolean datatype :
1 --> true ; 0 --> false
"" --> false
"jha78" --> true*/



// Particular datatypes to string conveersion
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *************** Operation  *******************

let value = 3;
let negValue = -value
// console.log(negValue);

// String concadination
let str1 = "hello"
let str2 = " hello"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// ***************** Comparison of datatypes *************
// If we compair same datatypes then there is no problem but when we try to compair two different datatypes then problem arises.
// So always try to compare values with same datatypes.

// console.log("2" > 1); // --> returns True (because internally string "2" gets converted to number)
// console.log("02" > 1); // returns True

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number,treating it as 0.*/



// strict check(===)  --> this checks whether given datatypes are same or not  +  their values are same or not
console.log("2" === 2);  // returns false

// check (==) --> this checks whether given compair values are same or   not 
console.log("2" == 2); // returns true