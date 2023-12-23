if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // Scope of var c is outside of this if block also, so we will just use let instead of var
}

// console.log(a);
// console.log(b);
console.log(c);

// In nested functions child function can access parent's variables
function one() {
  const username = "Ashish";

  function two() {
    const website = "Youtube";
    console.log(username); // This will not throw error
  }
  //   console.log(website); // This will throw error
  two();
}

one();

if (true) {
  const username = "Ashish";
  if (username == "Ashish") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website); // Parent's can't accesss child's variables
}

// console.log(username)// Error

// ++++++++++++++++++++++++ interesting+++++++++++++++++++++++
console.log(addone(5)); // No error
function addone(num) {
  return num + 1;
}

console.log(addone(5)); // No error

// console.log(addTwo(5)); // Error
const addTwo = function (num) {
  // This is not function this is a expression
  return num + 2;
};

console.log(addTwo(5)); // No error
