// const tinderUser1 = new Object(); // Singleton Object
// console.log(tinderUser1);

const tinderUser = {}; // Non singleton
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ashish",
      lastname: "Patel",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);    // not recommended
// const obj3 = Object.assign({}, obj1, obj2); // Recommended way and is more safe

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// This is the array of objects
const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
];

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Returns the keys only
console.log(Object.values(tinderUser)); // Returns the values only
console.log(Object.entries(tinderUser)); // Returns the arrays of keys and values

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "js in hindi",
  coursePrice: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor } = course; // This is called destructuring
console.log(courseInstructor);
const { courseInstructor: Instructor } = course;
console.log(Instructor);
