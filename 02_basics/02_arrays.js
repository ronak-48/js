const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1])

// concat
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//  concat ==> must return a new array,without modifying any existing arrays

// push ==> Appends new elements to the end of an array, and returns the new length of the array.

// spread
// MOSTLY WE USE "SPREAD"
const all_newHeros = [...marvel_heros, ...dc_heros];
// console.log(all_newHeros);

// -------------------------
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const useable_arr1 = arr1.flat(Infinity);
// const useable_arr1 = arr1.flat(1);
// const useable_arr1 = arr1.flat(2);

// console.log(useable_arr1);

// // flat ==> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// //  depth is how many sub arrays are there in main array above  are "2" i.e depth = 2


// --------------------------
// making values to ARRAY

// from
// console.log(Array.isArray("Ram"));
// console.log(Array.from("Ram"));

// console.log(Array.from({name :"Ram"})); // intresting case

/* 


let a="RAHUL"
console.log(a);
console.log(typeof(a));

// converting it ARRAY
const  b = console.log(Array.from(a));
console.log(typeof(b));


*/


// of
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

// --------------------------
let a11 = [1,2,3,4]
console.log(Array.isArray(a11));

