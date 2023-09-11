// how to declear Object :- 
// const JsUser = { 
//     name: "Histesh",
//     "full name" : "Hitesh choudhary",
//     age:18,
//     location: "Jaipur",
//     email: "anil@google.com",
//     isLoggedIn: false, 
//     lastLoginDays: ["monday","saturday"]
// }
// console.log(JsUser.full name);


// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// const regularUser = {
//      email: "some@gmail.com",
//      fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//      }
// }
// console.log(regularUser.fullname)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1,obj2 }

// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3); 

// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);


const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor: "Anil"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

const navbar = 
