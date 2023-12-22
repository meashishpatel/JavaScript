//arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "Ashish"];
const myHeroes = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]);

// Arrays methods
myArr.push(6);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(9); // Adds 9 at the 0th index of the array
console.log(myArr);
myArr.shift(); // Removes the first element of the array
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join(); //binds and converts into the string
console.log(myArr);
console.log(newArr);

// slice and splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3); //It excludes the last range
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); //It includes the last range also and also removes those spliced elements from the original array
console.log("C", myArr);
console.log(myn2);
