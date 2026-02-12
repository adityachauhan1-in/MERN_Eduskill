import chalk from "chalk";

let counter = 0  ; 
counter = counter + 1;
counter = 8 // it let you can assing the value but 
console.log(chalk.blueBright( "let",counter))

const count = 5 ;
// count = count+1 ; // TypeError : Assignment to constant variable.
console.log( chalk.red("const" , count))

// const prevent reassingment of variable not of the content if it is object  or array

// for OBJECTS
const person = { name : "Aditya" , age : "18"};
person.age = "21"
console.log(person)
// person = "harry"  //TypeError: Assignment to constant variable.


//  for ARRAYS
 const number = [2 , 3 , 5 , 6 ]
 number.push(19) ;
 console.log(number)

// number = [68 , 91]  TypeError: Assignment to constant variable.

// 🔴 Template Literals 


const name  = "aditya";
const age  = "21"

console.log( chalk.bgYellow(`Hello , My name is ${name} and my age is ${age}`))

// 🔴Destructuring 
const user = {
    name : "aditya" , 
    age : 12 , 
    email : "aditya@gmail.com" 
}
// traditional approach 
console.log(user.name);
console.log(user.age)

// ES 6 approach 
const { name : username , age  : ageuser,email } = user;
console.log(email) 
console.log(chalk.bgWhiteBright.black(username))

// Promise and async/await 
function delay(ms, message) {
return new Promise((resolve, reject) => {
if (ms < 0) {
reject(new Error("Delay time cannot be negative."));
console.log("if statement")
} else {
setTimeout(() => {
resolve(message || `Operation completed after ${ms}ms`);
}, ms);
console.log("resolve ")
  }
 });
}

console.log(delay)

// Async - await 
async function performDelayedOperations() {
try {
console.log("Starting operations...");

// Await the first promise
const result1 = await delay(2000, "First step done.");
console.log(result1);

// Await the second promise
const result2 = await delay(1500, "Second step done.");
console.log(result2);

// Example of awaiting a rejected promise
// const failedResult = await delay(-1000, "This will fail");
// console.log(failedResult); // This line will not be reached if delay rejects

console.log("All operations completed successfully!");
return "Success"; // This value will be wrapped in a resolved Promise
} catch (error) {
console.error("An error occurred during operations:", error.message);
throw error; // Re-throw the error to be caught by the caller
  }
}

// -------> Map, filter and Reduce <-------

// 🔴 Map 
const arr = [2,5,3,4,6,8,9,10];

// 3X each number 
const threeTime = arr.map(val => val * 3 );
console.log(chalk.bgGreenBright(threeTime))
//Extracting the property from array object s
const product  = [
  {id:1 , name : "laptop"},
  {id:2, name : "mouse"},
  {id:3 , name : "keyboard"}
]
const productName = product.map(pro => pro.name);
console.log(productName)
const productId = product.map(pro => pro.id);
console.log(productId)

// 🔴 Filter

const values = [1,2,3,4,5,6,7,8,9,10];
// want even number only 
const evenNumber = values.filter(val => val % 2 == 0);
console.log(chalk.redBright( "even numbers are : " , evenNumber))

const people = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 22 },
{ name: "Charlie", age: 28 }
];

const olderPeople = people.filter(person => person.age > 25);
console.log( olderPeople);

// 🔴Reduce 

const example = [34,56,7898 , 345];
const sum = example.reduce((accumulator , currentValue ) => accumulator + currentValue, 0) // 0 is the initail value 
console.log(chalk.bgCyanBright(sum))

// Count occurrences of items in an array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCounts = fruits.reduce((counts, fruit) => {
counts[fruit] = (counts[fruit] || 0) + 1;
return counts;
}, {}); // {} is the initial value (an empty object)
console.log(fruitCounts); // Output: { apple: 3, banana: 2, orange: 1 }

// We can use them as chaining for comples data 
const products = [
{ id: 1, name: "Laptop", price: 1200, category: "Electronics" },
{ id: 2, name: "T-Shirt", price: 25, category: "Apparel" },
{ id: 3, name: "Mouse", price: 25, category: "Electronics" },
{ id: 4, name: "Jeans", price: 50, category: "Apparel" }
];
// Get the total price of all 'Apparel' items
const totalPriceOfApparel = products
.filter(product => product.category === "Apparel") // Select only apparel items
.map(product => product.price) // Get their prices
.reduce((sum, price) => sum + price, 0); // Sum the prices

console.log(totalPriceOfApparel); // Output: 75 (jeans + t- shirt)

// ------Exercise < =====
const students = [
{ name: "Alice", score: 92 },
{ name: "Bob", score: 75 },
{ name: "Charlie", score: 88 },
{ name: "David", score: 65 },
{ name: "Eve", score: 95 }
];
// 1 student marks greater then 80
const markEighty = students.filter(student => student.score > 80) 
console.log(markEighty)
 //2 student with passed property 

 const scoreStatus = students.map(student => ({
  ...students,// spread existing properties 
  passed : student.score > 70 

}))
console.log( " student with status ",scoreStatus) 

// 3 Averrage score 
const totalScore = students.reduce((sum , student ) => sum + student.score , 0);
const averageScore  = totalScore / students.length;
console.log(averageScore)

// -----> Map , Filter and Reduce finish <======

  // 🔴🔴🔴 Refactoring the old java script 
  function processUserData(user) {
const name = user.name;
const age = user.age;
const city = user.address.city;
const country = user.address.country || "Unknown";

var greeting = "User Profile:\n";
greeting += "Name: " + name + "\n";
greeting += "Age: " + age + "\n";
greeting += "Location: " + city + ", " + country + "\n";

if (age >= 18) {
greeting += "Status: Adult";
} else {
greeting += "Status: Minor";
}

return greeting;
}
const sampleUser = {
name: "Jane Doe",
age: 25,
address: {
street: "123 Main St",
city: "Metropolis",
country: "USA"
}
};
console.log(processUserData(sampleUser));

 // Modern Js (ES 6 ) 
function processUserDataModern (user){
  const {name , age , address: {city , country = "Unknown"}} = user ;  // destructuring 
  // use template literal 
 const greeting = `User Profile : 
    Name : ${name} 
    Age : ${age} 
    Address : ${city} , ${country}
    Status : ${age >= 18 ? "Adult" : "Baccha"}`
 
    return greeting;
}
const sampleUserModer ={
  name: "Aditya",
  age:21 ,
  address:{
    street:"mawana road",
    city:"meerut ",
    country:"India"
  }
}
console.log(processUserDataModern(sampleUserModer))

// SCENARION NUMBER ==========> Second 

const scenarioProduct = [
  {id: 1 , name : "mobile",price : 30 },
  {id: 2 , name : "charger",price : 40 },
  {id: 3 , name : "datacable",price : 50 },
  {id: 4 , name : "printer",price : 60 }
]

const fetchProuctList = scenarioProduct.map(pro => pro.id)
console.log(fetchProuctList,)

// ------> Json <---------
// Json string recieved from an api 
const jsonString = `{ "name" : "Aditya" ,
 "age": 22 , 
  "city":"Meerut" }`
// parse the json string into javascript object 
const objectString = JSON.parse(jsonString);
console.log(chalk.bgBlue(objectString.name))
console.log(chalk.bgBlue(objectString.city))
console.log(chalk.bgBlue(objectString.age))
//  JavaScrpt object to the json format 
const userDetails = {
  "name" : "Chauhan",
  "age" : 21 , 
  "city" : "Bangalore"
}
const jsonUserDetails = JSON.stringify(userDetails)
console.log(chalk.bgGray(jsonUserDetails))