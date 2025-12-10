// singleton  ==> liternals ki traf declare karte hai to singleton nahi bane ga

//  agar constructor se bane ga to Singleton

// --------------------------

// Object.create // this is constructor method
//  aur isse me singleton banta hai

// -----------------------------
// key  value pair concept

// // symbol  We'll discuss more about symbols later also
const mySym = Symbol("key1")

const JsUser ={
    name : "Hitesh",
    "full name" : "Ritesh Modi",

    // mySym  : "myKey1",
    [mySym]  : "myKey1",

    age : 18,
    location :"Jaipur",
    email :"ram@google.com",
    isLoggedIn :false,
    lastLoginDays :["Monday" , "Saturday"]
}
// console.log(JsUser);

//  // Accessing Object  
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// //  console.log(JsUser.full name) // error , must use []
// console.log(JsUser["full name"])


// symbol
// console.log(typeof JsUser.mySym);
// console.log( JsUser.mySym); // undefined

// =======================================
// // correct way to access symbol
// console.log( JsUser[mySym]);

JsUser.email = "shyam@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser)

JsUser.email ="rama@google.com"
// console.log(JsUser)


// functions
JsUser.greeting = function(){
        console.log("Hello JS User");
}
console.log(JsUser.greeting);


JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


