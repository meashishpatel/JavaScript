const name = "ashish";
const repoCount = 50;
console.log(name + repoCount + " Value"); // This syntax is not recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Modern syntax, recommended

const gameName = new String("Ashish-AP"); //Another way to declare a string
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('P'))
console.log(gameName.charAt(2))

const newString = gameName.substring(0,4) // last value is excluded i.e:4
console.log(newString)

const anotherString = gameName.slice(0,4) // We can use negative values in it
console.log(anotherString)

const newStringOne = "  ashish  "
console.log(newStringOne)
console.log(newStringOne.trim()); // trim() removes the unwanted spaces , another variations are trimStart(), trimEnd()


const url = "Ashish Patel"

console.log(url.replace('Patel', "Choudhary"))
console.log(url.includes("Ashish"))
console.log(url.includes("Anjali"))


const abc = "anjali-patel-upadhyay"
console.log(abc.split("-"))