const marvel_heros = ["Ironman", "Spiderman", "Groot"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros) // this will create array in array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


// const allHeros = marvel_heros.concat(dc_heros) // this will create new array with both array combined
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,...dc_heros] // Spread all method : another easy method to concatinate two or more arrays
// console.log(all_new_heros); 

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arr1 = arr.flat(Infinity) //retuns a new array with no array in array while flat(x)--> x is depth of subarray 
// console.log(arr1);

console.log(Array.isArray("Cricket"));// checks whether given data is present in array or not
console.log(Array.from("Cricket"));  // converts given data into array
console.log(Array.from({name : "cricket"}));  // this will give an empty array . In order to generate non-empty array then we have to specify : key se array banao ya fir values se array banao 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));