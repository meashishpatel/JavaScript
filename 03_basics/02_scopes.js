if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // Scope of var c is outside of this if block also, so we will just use let instead of var
}

// console.log(a);
// console.log(b);
console.log(c);
