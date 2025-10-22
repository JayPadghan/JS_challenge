/* In JS , arrays are objects. JS creates shallow copies(works on call by reference) rather than deep copies.
JS arrays are resizeable and may contain mix of datatypes. Excess using its index starting from 0. */

// Array declaration
const arr = [1, 2, 3, 4, 5]
const arr1 = ["he", "she", "him", "her"]

const arr2 = new Array(1,2,3,4)    // other way to declare arrays
// console.log(arr1[2]);


// Array methods
// arr.push(9)  // add 9 at the end 
// arr.pop() // removes last element

// arr.unshift(8) // adds element 8 at the starting of arr by shifting our original array backside 
// arr.shift() // removes first element from the array

const newArr = arr.join() // Adds all the elements of an array into a string,
console.log(arr);
console.log(newArr); // -->  returntype string


// slice and splice
console.log("A ",arr);

const myn1 = arr.slice(1,3) // Don't manipulates the original array + prints the elements excluding ending range
console.log(myn1);
console.log("B ",arr);

const myn2 = arr.splice(1,3)  // manipulates the original array + prints the element including ending range 
console.log(myn2);
console.log("C ",arr);