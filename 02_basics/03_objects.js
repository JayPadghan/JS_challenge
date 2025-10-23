/* Objects declare karne k doo tarike hai : literal ki tarah aur ek hai hai constructor ki tarah

Singleton : Jab hum constructor se object declare karte hai toh sirf ek hi object banta hai (i.e. Singleton) lekin jab hum dusri tarah(using literal)
 se object banate hai toh uss object k multiple instances ban jate hai.

 */


 /* 1)Objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.
  2)Object members (properties or methods) can be accessed using dot notation or bracket notation.
  3)Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 
  4) A Method in javascript is a property of an object whose value is a function. 
  5)A function is an independent sequence of a bunch of statements whereas a method is associated with an object and is generally referenced by this keyword. 
  6)You can delete properties using the delete operator, which removes the property from the object.
  7)An object is a complex data structure that allows you to store collections of data. It is used to group related data and functionality together, consisting of properties (key-value pairs) and methods (functions).
  8)*/

// Object.create --> in this way we can create object using constructor

 const myKey =Symbol('person1') // how to use this symbol in object is given below

const user1 = {        // can be created using key-value pair(literal)
    name : "Jay", 
    "full name" : "Jay Padghan",
    age : 20,
    location : "Ahmedabad", 
    emailId : "jhbjhsh@gmail.com",
    isLoggedIn : false,
    lastLogindays : ['Monday', ' Sunday'],

    73 : "Roll no.",

    [myKey] : "person"  // we can use symbol by putting square bracket
} // we can give any data type in object whether it is primitive or non-primitive

// console.log(user1.emailId); // using dot operator we can excess --> 1st method (most of the times we use this )
// console.log(user1["emailId"]); // another way to excess key. This is the better way because through this only we can excess "full name " otherwise dot operator is not able to excess it
// console.log(user1["full name"]);
delete user1.age;
console.log(user1);

// console.log(user1[73]);

// console.log(user1.myKey); // wrong way to excess symbol in object
// console.log(user1[myKey]); // correct way to excess symbol in object

// // how to change values in objects 
// user1.emailId = "zzzzz@gamil.com"
// console.log(user1.emailId);

// Object.freeze(user1)  // after  using this ,further we cannot be able to edit our object
// user1.emailId = "pppppp@gmail.com"
// console.log(user1.emailId);


// Adding function in object 
user1.greeting = function(){  // creating function and storing it in a variable 
    console.log("Hello Js user");
}

user1.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(user1.greeting());
console.log(user1.greeting2());

// https://www.geeksforgeeks.org/creating-objects-in-javascript-4-different-ways/ --> ways to create objects in JS