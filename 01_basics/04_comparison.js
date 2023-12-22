console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// Avoid these types of comparisons
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// It will always give false result
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log((undefined = !0));

// ==== => This operator is used to strict check, it also check the datatypes
console.log("2" === 2);
