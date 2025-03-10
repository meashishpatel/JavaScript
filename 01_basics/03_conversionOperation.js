let score = "33";
console.log(typeof 33);
console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
//null => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ashish" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************** Operations ***************************************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 3);
// console.log(2 ** 3);
// console.log(2 % 2);

let str1 = "hello";
let str2 = " ashish";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + "2" + "2");
console.log(1 + 2 + "2");

console.log(+true); // it will print 1
console.log(true);
console.log(+""); // It will print 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // bad practices
let gameCounter = 100;
++gameCounter; // prefix operator
gameCounter++; // postfix operator
console.log(gameCounter);
