// if
const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 40");
} else {
  console.log("temperature is greater than 40");
}

console.log("Execute");
// <, >, <=, >=, ==, !=, ===(Strict equal, It also checks the datatype), !==

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // This line will throw error, because the scope of var is not global

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); // This is short hand notation, not recommended

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 750");

} else {
    console.log("less than 1200");

}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}