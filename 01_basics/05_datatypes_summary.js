/* Datatypes are divided on the basis of how data is stored in the memory and how it is fetch : Primitive & Non-primitive.
Primitives follows Call By value concept while non-primitives follow Call By Reference concept.
 */

/*JS is a dynamic language and not static, which means that variables can hold values of different types during
runtime. Unlike languages such as Typescript,Java, you don't need to declare the data type of a variable explicitly. */

// Primitive (Call By Value)

// 7 types  : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // --> number
const score2 = 100.33  // --> number (there is no special type for floating point numbers)
const isLoggedIn = false // --> boolean
const outsideTemp = null // --> object
let userEmail;  // --> undefined

const id = Symbol('123')
const secId = Symbol('123')
console.log(id === secId);  // returns false (symbol is used for uniqueness)

const bigNumber = 787863717n // (suffix n will directly convert it to bigint)
console.log(typeof bigNumber);


//Non-Primitive(Call by reference)  --> Arrays , Objects , Functions

const heros = ["bahubali","bahubali_2","bahubali_3"]  //--> Arrays

let myObj = {     // --> object
    name : "jay",
    age : 20,
}

const myFunction = function(){  // In JS we can store function in variable also.
    console.log("hello wordd");
}
console.log(typeof myFunction);  


console.log(typeof heros);  // --> Objects
// The data type of most of the non-primitive's is objects