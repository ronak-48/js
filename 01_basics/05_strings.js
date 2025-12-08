const name = "ram"
const repoCount = 50

// outdated syntax
// console.log(name + repoCount + " Value");

// we use back ticks ` `
// string interpolation = we make placeholders,unke ander jo bhi variable hai use hum directly inject kr sakte hain.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('ritesh-hc-com')

// string gives ==> key value pairs object

// console.log(gameName[0]);
// console.log(gameName.__proto__); //  {} ==> object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// ---------- substring -------------------
const newString = gameName.substring(0,6)
// console.log(newString);

// ------------ slice --------------------
const anotherString = gameName.slice(0,6)
// console.log(anotherString);

const anotherS = gameName.slice(-8,4)
// console.log(anotherS);

// substring(value-includede , value-excluded)
// not used with negative numbers or in reverse order

// slice(inclusive , exclusive)
// can use negative values , reverse order can be generated


// --------------- trim --------------
const newStringOne = "    hitesh     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// ----------- replace ---------------
const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'));
// console.log(url);

// ========  includes ===============
// console.log(url.includes('hitesh'));
// console.log(url.includes('sundar'));


// ------------ split ---------------
//  // const gameName = new String ('ritesh-hc-com')

// console.log(gameName.split('-'))
// return an array

// ------------- concat ------------------
let n1 = "Messi"
let n2 = "Ronaldo"
console.log(`argentina = ${n1} , portugal = ${n2}`);
console.log(n1.concat(n2));

