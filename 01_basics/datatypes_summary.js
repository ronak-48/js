/* 
                        DATA TYPES

kis taraf se data ko memeory mei rakha jata hai, aur access kiya jata hai 2 main datatypes

1) PRIMITIVE ==> 
   ---------

    7 types :-
    -------
    1) STRING       2)NUMBER        3)BOOLEAN
    4)NULL          5)UNDEFINED     
    6)SYMBOL(to make any value unique), adv js frontend dev
    7)BigInt




=>primitive data types are "call by value" ,
    means jab bhi app inko kahi se kahi copy karte hai to inka original data hai uska memory ka refernce nahi diya jata hai,
    inko copy krkr diya jata hai alag ,aur usme jo app changes krte ho wo copy mei changes hote hai



2) NON-PRIMITIVE  or   ==>
    REFERENCE TYPE         
    --------------

    1)Array
    2)Objects
    3)Functions

=> IS JS STATICALLY / DYNAMICALLY TYPED LANGUAGE ?
ANS == DYNAMICALLY TYPED

Why?
==> You don’t need to declare variable types (like int, string, etc.).
==> Type checking happens at runtime, not during compilation.
==> A variable can change its type anytime.

*/

// ================ PRIMITIVE TYPE =====================

const score = 100 // num
const scoreValue = 100.3  //num

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail ; //undefined

// console.log(typeof (outsideTemp)); // object
// console.log(typeof (userEmail)); // undefined




// SYMBOL
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false


// BigInt
const bigNumber = 1413441334134242343n
// console.log(typeof(bigNumber));



// ======= NON-PRIMITIVE TYPE or REFERENCE TYPE =========
// Array, Objects, Functions

const heros =["ram" ,"shyam","hanuman"];// array

// object
let myObj = {
    name1 :"ram",
    age: 22,
}
// console.log(typeof(myObj)); // object


// function
const myFunction = function(){
    console.log("hello world");
}
// console.log(typeof(myFunction)); // function
// functionhe return krta hai , but we call it as
//  "function object"


// refernce
// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  STACK AND HEAP MEMORY IN JAVASCRIPT

// STACK ==> PRIMITIVE DATATYPES
    // jo bhi variable declare kiya hai , uske hame ek copy milte hai


// HEAP ==> NON-PRIMITIVE DATATYPES or Reference
    // here we get the reference of the original value, jo bhi chnages karenge  wo original value mei hoga

let myname1 = "ram"
let anothername = myname1
anothername = "shree ram"


// console.log(anothername);
// console.log(myname1);

// ---------------------------

let userOne = {
    email : "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "ram.@google.com"

console.log(userOne.email);
console.log(userTwo.email);






