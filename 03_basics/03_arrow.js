const user = {
  username: "ashish",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); // ths refers to the current context
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); // It will show the empty object as the output but different output in the browser

// function chai() {
//   console.log(this);
// }

// chai();
// Output
{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 47.971299999859184,
      nodeStart: 2.278500000014901,
      v8Start: 4.983700000215322,
      bootstrapComplete: 32.00419999985024,
      environment: 15.226799999829382,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1703312347742.328
  },
  fetch: [AsyncFunction: fetch]
} */
}

// const chai = function () {
//   let username = "ashish";
//   console.log(this.username);
// };

// chai();   // >> Undefined

const chai = () => {
  // This is called ARROW FUNCTION
  let username = "ashish";
  console.log(this.username);
  console.log(this);
};
chai(); // >> Undefined

// const addTwonum = (num1, num2) => {  //Simple arrow function, explicit return
//   return num1 + num2;
// };

const addTwonum = (num1, num2) => (num1 + num2); // Implicit return arrow function

console.log(addTwonum(5, 7));
