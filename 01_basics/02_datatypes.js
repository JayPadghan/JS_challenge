"use strict"; // treat all JS code as newer version. If we dont use then also it directly assumes it .

//alert(3 + 4)  // we are using nodejs, not browser

let name = "Baburao"  // --> string 
let age = 20    //--> number
let isLoggedIn = false   // --> boolean
let state;   // --> undefined

let data = "" // this is not null because we had use "" ,therefore its type is set as string
let daata = null // this is null which indicates that " abhi value assign nahi hui hai"  / daata is empty , no value is there

/*Types of datatypes : 
1) number
2) bigint
3) string
4) boolean
5) null --> standalone value
6) undefined
7) symbol --> used for uniqueness

Above all are primitive datatypes. 

Non-Primitive : object    
*/

console.log(typeof undefined);  // O/p  :  undefined
console.log(typeof null);  // O/p   : object