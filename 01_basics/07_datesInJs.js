// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  // Object

// let myCreatedDate = new Date(2023, 0, 23)  // Months start from 0 in JavaScript
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") //yyyy=mm--dd
let myCreatedDate = new Date("01-14-2023") // MM-DD_YYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // Converts into milliseconds into seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


// 2023-09-22T20:43:47.650Z
// Date printing in 'toString' method: Fri Sep 22 2023 20:43:47 GMT+0000 (Coordinated Universal Time)
// Date printing in 'toDateString' method: Fri Sep 22 2023
// Date printing in 'toISOString' method: 2023-09-22T20:43:47.650Z
// Date printing in 'toJSON' method: 2023-09-22T20:43:47.650Z
// Date printing in 'toLocaleString' method: 9/22/2023, 8:43:47 PM
// Date printing in 'toUTCString' method: Fri, 22 Sep 2023 20:43:47 GMT