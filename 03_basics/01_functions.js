function sayMyName() {
  console.log("A");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("S");
  console.log("H");
}

sayMyName();

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

//sam is just a default value here
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Ashish"));
console.log(loginUserMessage());

// When we don't know the the number of arguments
function calculateCartPrice(...num1) {
  // ... This is the rest operator here
  return num1;
}

console.log(calculateCartPrice(200, 400, 600));

const user = {
  username: "Ashish",
  price: 10000000,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({
  username: "abc",
  price: 10000,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
