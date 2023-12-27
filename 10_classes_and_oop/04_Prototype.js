let myName = "Ashish    ";
let mychannel = "chai     ";

console.log(myName.length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.ashish = function () {
  console.log("Ashish is present in all objects");
};

// heroPower.ashish()
myHeros.ashish();

Array.prototype.heyAshish = function () {
  console.log("Ashish says hello");
};

myHeros.ashish();
myHeros.heyAshish();
// heroPower.heyAshish(); - Error(heyAshish works only with array)

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; // Inheritance

// modern syntax of inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"ashish  ".trueLength();
"iceTea".trueLength();
