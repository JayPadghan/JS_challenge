/* All time in JS is measured w.r.t  January 1 1970 */
let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);  // date is an Object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024,5,3) // we can give our own date
// let myCreatedDate = new Date(2024,0,3,4,5)
// let myCreatedDate = new Date("2024-01-03") // yy-mm-dd
let myCreatedDate = new Date("02-12-2024") // mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // this will generate the time in millisecond from 1970 to till present
// console.log(myCreatedDate.getTime()); // this will generate time acc. to given date specified
// console.log(Math.floor(Date.now()/1000)); // this will generate time in second

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());  // Just like this there are several methods to get specific data from date. Note : 0-Jan, 1-Feb, 2-March..........
  

// we can also use string interpolation to print date
//console.log(`${newDate.getDate()} and the time is blablablaa.....`);




/* Since Date is an object , so we can modify its property as given below */
newDate.toLocaleString('default',{
    weekday : "long",
})
console.log(newDate.toLocaleString());