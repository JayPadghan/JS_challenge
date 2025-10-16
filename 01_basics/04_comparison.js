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