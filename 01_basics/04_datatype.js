// Datatype in js

// premative : 7 categories
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

//nonpremative 
// Array
// Object
// function

//premative ex
// const score = 100
// const scoreValue =100.3
// const is_loggedIn = false;
// const outsideTemp = null;
// let userEmail;  //value undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

//Non premative

const heros = ["shaktiman","naagraj","dogi"]  //array

let myobj={
    name : "hitest",
    age : 22
}

console.log(myobj);

const myfun = function(){
    console.log("Hello Rohit");
    
}

//**********************Stack heap memory inv****************//

//stack(premative) => its create copy of the value and changes it
//heap(non premative) => ite get the reference of the value and change actual value

//************* premative
let myYoutubename = "rohitorcode"

let anothername = myYoutubename   //change in copy not original value 
  anothername = "chai or code"    


console.log(anothername);

console.log(myYoutubename);

//*************** nonpremative

let user1 = {
    email : "roit@gmai.com",
    upi : "user@ybl"
}

let user2  = user1   //pass the reference
user2.email = "hitesh@google.com"  //change the original value

console.log(user1.email);
console.log(user2.email);

