//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// null ka datatype object aata hai hmesha typeof se
// function ka datatype object function aata hai
// jitne non primitive hai unka datatype object hi aata hai
// symbol ka datatype symbol hi aata hai

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) , Heap (Non-Primitive)

let myYoutubename = "ashishpateldotcom";
let anotherName = myYoutubename;

let anotherName = "chaiOrCode";
console.log(myYoutubename);
console.log(anotherName);

let user = {
  email: "user@gmail.com",
  upi: "user@ybl",
};
let user2 = user;
user2.email = "ashish@google.com";
console.log(user.email);
console.log(user2.email);
