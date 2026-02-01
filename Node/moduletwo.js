import chalk from "chalk";

let counter = 0  ; 
counter = counter + 1;
counter = 8 // it let you can assing the value but 
console.log(chalk.blueBright( "let",counter))

const count = 5 ;
// count = count+1 ; // TypeError : Assignment to constant variable.
console.log( chalk.red("const" , count))

// const prevent reassingment of variable not of the content if it is object  or array

// for ARRAYS 
const person = { name : "Aditya" , age : "18"};
person.age = "21"
console.log(person)
// person = "harry"  //TypeError: Assignment to constant variable.


//  for OBJECTS 
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