/* Immediately Invoked Function Expressions (IIFE)
IIFE is a type of a function which runs immediately as it is defined.
A soon as function is created it invokes itself doesn’t need to invoke explicitly.
Variables declare in this function are local variables and not accessible outside the function.

Uses : 1) Avoid polluting the global namespace --> Suppose karo ki ek variable hai jo ki globally 
declare hai . Ab uss varibale ko hume ek function k andar use kkarna hai aur voh fn sirf ek hi baar use karna hai .
Jab fn execute ho jayega toh iss variable ka kuch use nahi rahega . So better is to put that variable into 
iife.
*/

//Ex-1
let a = 3;
(function code () {    // named iife
    let a = 2
    console.log(a);
})();   // -----> Remember : always put this semi-colon at the end to terminate iife
console.log(a);


//Ex-2
// ( () => {     // unnamed iffe
//     let firstVariable;
//     let secondVariable;
//   })();
// firstVariable and secondVariable will be discarded after the function is executed.


//Ex-3
((name) => {         // parameter passed iife
    console.log(`My name is ${name}`);
})('jay');

  