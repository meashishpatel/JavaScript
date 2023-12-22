// Singleton - Ye constructors se hi banta hai literals se nahi
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Ashish",
  "full name": "Ashish Patel",
  age: "20",
  //   mySym: "mykey1",  //Wrong way to denote a symbol in an object
  [mySym]: "mykey1",
  location: "Udaipur",
  email: "ashishpatel@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "ashishpatel@openai.com"; //to change
// Object.freeze(JsUser); // No changes from now on
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting); // Output will show [Function (anonymous)] because not used ()
console.log(JsUser.greeting());
console.log(JsUser.greetingTo());
