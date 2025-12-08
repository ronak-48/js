let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate); // object

// creating customised date
// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2025");

// console.log(myCreatedDate.toLocaleString());

// ============ timestamp ============
let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// // helpful in hotel / airbnb apps etc.

// console.log(Math.floor(Date.now()/1000)); // converting in seconds ,used floor because we got the decimal values.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);// since starts with 0
console.log(newDate.getDay());


// //     "toLocaleString"   mosty used
newDate.toLocaleString('default',{
    weekday : "long",

})
//  use CTRL + SPACEBAR, to get the sniptes inside the obj