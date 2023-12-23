// Immediately Invoked Functions Expressions (IIFE)
// Jaise hi function likha isko turant execute karwana hai
// Global scope ke pollution se dikkt hoti hai kai baar global scope ke pollution se bachne IIFE ka use krte hai
// IIFE function must contain ; at the end
(function chai() {
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("ashish");

// (function definition)(function execution)
