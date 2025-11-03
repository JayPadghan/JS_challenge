/* The if-else statment and switch statement syntax are same as we done in C. */

/* Truthy and falsy values :
falsy --> false , 0, -0, "", 0n(BigInt), null, undefined, NaN
truthy(suprising ones) --> "0", "false", [] , {} , function(){}, " " */



// Detecting whether object is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


/* Nullish Coalescing Operator(??) : The nullish coalescing (??) operator is a logical operator that returns its
 right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 
 It’s commonly used to provide default values for variables. */
 let val1;
 val1 = null ?? 10
 val1 = undefined ?? 10
 val1 = 5 ?? 10
 val1 = null ?? 10 ?? 20

 console.log(val1);






 // Tenary operator