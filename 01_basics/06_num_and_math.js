const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 23.89366
// console.log(otherNumber.toPrecision(2));

// const otherNumber = 123.89366
// console.log(otherNumber.toPrecision(3));

// const otherNumber = 1123.89366 // 1.12e+3
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++ MATHS +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // 4

// console.log(Math.round(4.16)); // 4
// console.log(Math.round(4.61)); // 5

// contoling the rounfoff value
// console.log(Math.ceil(4.2)); //  chooses upper values = 5
// console.log(Math.floor(4.2)); //  chooses lower values = 4

// console.log(Math.sqrt(5))
// console.log(Math.sqrt(5).toFixed(2))

// console.log(Math.min(3,4,7,2));
// console.log(Math.max(3,4,7,2));

console.log(Math.random()); // range is 0  to 1
console.log(Math.random() * 10); // value can be "0" also
console.log(Math.random() * 10 + 1); // +1 value > 0 always

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;


// m.imp
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//  L === 12

console.log(typeof NaN); // NUMBER
console.log( NaN === NaN);// any string can b ecompared thus FALSE

