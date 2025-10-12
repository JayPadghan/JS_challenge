
const accountId = 13442
let accountEmail = "jay@gmail.com"
var accountPassword = "1234"
accountCity = "Chennai"  // we can  also declare varibles without using (let) and (const) keywords, but this is not always good

let accountState; 

// accountId = 619          // --> if we re-initialize constant variable then it will throw an error.

console.log(accountId); 
accountEmail = "jay@hbhjbka.com" 
accountPassword = "6677778"
accountCity = "Bengaluru"  

console.table([accountEmail,accountPassword,accountCity,accountId,accountState]) 

/*In javascript to declare variables we use two things : 
1) const : use when we do not need to change value
2) let : use when we know that its value may change in future

There is another way to declare variables i.e  var : which we donot use because of its scope problem.

It is not compulsary to use semi-colon at the end of each statement.*/
