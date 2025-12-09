// ARRAY
// Array Object, enables storing a collection of multiple items under a single variable name , and has members for performing common array operations.

// 0   based indexing
// js array-copy operations create " shallow copies" .
// all standard built-in copy operations with any js objects create shallow copies, rather than "deep copies"

/* 
shallow copies =-> a shallow copy of any obj is a copy whose properties share the same reference(point to the same underlying values) as those of the source object from which the copy  was made .

jo bhi changes hum  karenge wo original mei bhi honge

deep copies ==> A deep copy of an object is a copy  whose properites do not share the same reference (point to the same underlying values) as  thoswe of the source object from which the copy was made 

original array mei changes nahi honge

*/
// =============================================================

// const myArr = [0, 1, 3, 4, 5];
// console.log(myArr);
// console.log(myArr[0]);

// const myHeros = ["thor" , "batman" ,"jhon wick"]
// console.log(myHeros);

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);
// console.log(myArr2[1]);

// ------------ Array Methods ---------------
// const myArr = [0, 1, 3, 4, 5];

// myArr.push(6)
// myArr.push(7)

// myArr.pop()

// myArr.unshift(9) // value is inserted at the start of array
// myArr.shift()  // removes the value from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// ------------------------------
// const newArr = myArr.join() // typge chnages to string => join

// console.log(myArr)
// console.log(newArr);

// console.log(typeof(newArr));// string
// console.log(typeof(myArr));// object

// =======================================
//  slice    ,  splice

const myArr = [0, 1, 2, 3, 4, 5];

console.log("A ", myArr); // original array  

// slice
const myn1 = myArr.slice(1, 3); // slice (inclusive , exclusive )
console.log(myn1);

console.log("B ", myArr); 

// splice
const myn2 = myArr.splice(1, 3); // splice (inclusive , exclusive )
console.log(myn2);

console.log("C ", myArr);

/*
SLICE ==> returns the copy of array
    HERE RANGE NOT INCLUDED
        (inclusive , exclusive)
    original array is not afftected/not changed

SPLICE ==> Removes elements from an array
    Here range is included
        (incllusive , inclusive)
    origial array is changed / afttected

*/
