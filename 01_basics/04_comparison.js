console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // True
console.log("02" > 1); // True

// Avoid these types of comparisons
console.log(null > 0); // False
console.log(null == 0); // False
console.log(null >= 0); // True

// It will always give false result
console.log(undefined == 0); // False
console.log(undefined > 0); // False
console.log(undefined < 0); // False
console.log((undefined = !0)); // True

// ==== => This operator is used to strict check, it also check the datatypes
console.log("2" === 2); // False
