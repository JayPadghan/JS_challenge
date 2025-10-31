/* (this) keyword is used to refer to the current context or current scope */
const user = {
    username : "Jay",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
};

// user.welcomeMessage()
// user.username = "Bob"
// user.welcomeMessage()

// console.log(this); // this will generate an empty object, but when we run this line in browser then it will give Window object--> which is a global object of the browser but here we donot have any global object or variable thats why it gives empty object




/* Through below codes we will see that (this) keyword do not work in function , it only works in objects  */
// function code(){
//     let username = "Jay"
//     console.log(this.username); 
//     console.log(this); 
// }
// code() 


// const code = function(){
//     let username = "Jay"
//     console.log(this.username);
// }
// code()









// ******* Arrow function declaration *************
// () => {}  // --> 1st way 
// const code = () => {}  // --> 2nd way --> in this arrow function is store in a variable

// const code = () => {
//     let username = "Jay"
//     console.log(this); 
// }
// code()  // this will genearte an empty object

// Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical context (the context in which the arrow function was defined). This means that this inside an arrow function is the same as this outside the arrow function.







// const addTwoNum = (num1, num2) => {
//     return num1 + num2  // explicit return
// }

// const addTwoNum = (num1, num2) =>  num1 + num2 // Implicit return (when we have only one line of code)
// const addTwoNum = (num1, num2) =>  (num1 + num2) 

const addTwoNum = (num1, num2) =>  ({username : "Jay"}) // In this way we can pass object using rounded brackets
// console.log(addTwoNum(2,3))