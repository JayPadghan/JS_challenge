const user1 = new Object(); // this is Singleton object

const user2 = {}  // this is non-singleton object
user2.id = "123hgja@gmail.com"
user2.username = "Jay"
user2.isLoggedIn = false

//console.log(user2);




// Object inside object
const user3 = {
    email : "tttttt@gmail.com",
    user_name : {       
        full_name : {
            firstname : "Jay",
            lastname : "Padghan"
        }
    }
}
// console.log(user3.user_name.full_name.firstname);


// combining two objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj0 = {5:"a",6:"b"}

const obj3 = Object.assign({},obj1,obj2,obj0);  // when we put empty object at the starting then all the combined objects will go into that empty object(obj3) without manipulating any individual object
// console.log(obj3);
// console.log(obj3 === obj1);

const obj4 = Object.assign(obj1,obj2,obj0);  // in this all the combined objects will go into obj4 but it manipulates the obj1 by putting all the object also into it.
// console.log(obj1);
// console.log(obj4 === obj1);

const obj5 = {...obj1,...obj2,...obj0}  // we use mostly this to combine the objects
// console.log(obj5);
// console.log(obj5 === obj1);



// console.log(user2);
// console.log(Object.keys(user2));  // returns an array of keys . Now we can apply loop on this array to do our operations
// console.log(Object.values(user2));  // returns an array of values.
console.log(Object.entries(user2));
// console.log(user2.hasOwnProperty('isLoggedIn'));// check whether given property is present or not in the specified object



// ********* Object De-structure*************
const student = {
    name : "Jay",
    branch : "Electronics",
    college_name : "SVNIT"
}

const {college_name : college} = student
console.log(college);   // instead of using  student.college_name





// ***************** JSON *****************
//https://www.geeksforgeeks.org/javascript-json-objects/?ref=lbp