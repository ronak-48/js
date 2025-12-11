// const tinderUser = new Object() // singleton object
const tinderUser = {}; // npt a singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// ----------------------------
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "choudhary",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1 ,obj2}
// const obj3 = {...obj1,...obj2}

// object    assign
//  copies one object to another (target , scource)
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// spread
const obj3 = { ...obj1, ...obj2, ...obj4 };

// console.log(obj3);

// ------------------------------
// database se jab values aayegi , array of objects
// output data type is array

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "xaw@gmail.com",
  },
];

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// // each key value value is given in a seperate array
// console.log(Object.entries(tinderUser));

// //  to check if the properties are present or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// ****************************************
// ========================================
// object de-construct  and  json api intro

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);

const { courseInstructor: instructor } = course; // reducing the size of name
console.log(instructor);

/*
react concept  :-- destructuring

const navbar = ({company})=>{

}
navbar(company = "hitesh")

*/

// -----------------------------------
// api's
// = apna kam kisi aur ke sar pe dal dena hai to use api khete hain

// api kuch nahi aapke pass kuch values aati hai backend se,un values ko aap kase likh te hai

// phele ke time mei values Xml mei aati thi, jo complex structure tha
// abhi ke time mei JSON me aati hai values

// json ==> its a object without name
// {
//     "name": "hitesh",
//     "coursename" : "jsin hindi",
//     "price" : "free"
// }


// kai bar apis arrays ke format bhi milte hai

// random user me api
//  json formatter ==> explainantion of above

