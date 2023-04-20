// Functions

// 01 - Function Declaration vs Expressions
// Function declaration
function walk() {
  console.log("walk");
}

// Named Function Expression
let run = function walk() {
  console.log("run");
};

// Anonymous Function Expression
const runA = function () {
  console.log("run");
};
// Calling the function
runA();
// Assign function to another variable
let move = runA;
// Call function via the variable
move();

// 02 - Hoisting (the process of moving function declarations to the top. happens automatically)

// A function that is declared can be called before it is defined
// You cant do this with the function expression syntax
// like using a variable

// 03 - Arguments

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(1, 2, 3, 4));
//console.log(sum(1));
// returns Nan

function nSum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(nSum(1, 2, 3, 4));

// 04 - The Rest Operator
// ... covert the arguments passed to the function as an array
// you cant have any other parameter after the rest operator

function kSum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(kSum(0.1, 20, 30));

// 05 - Default Parameters
// When adding default values to arguments
// keep going to the end of the arguments
// ie dont leave the last one without a value

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(1000));
console.log(interest(1000, undefined, 5));

// 06 Getters and Setters

// getters => access properties
// setters =>change (mutate) them

// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// console.log(person.fullName);
// person.fullName = "John Smith";
// console.log(person.fullName);
// console.log(person);

// 07 Try and Catch
// Defensive Programming

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "Phil Pidis";
} catch (e) {
  alert(e);
}

console.log(person);

// 08 Local vs Global Scope
// Local variables take precedence over global variables
// Global variables can be accessed from anywhere in the code
// Avoid defining global variables

// 09 Let vs Var
// Avoid using var
// var => function-scoped keywords
// ES6 (ES2015): let, const => block-scoped keywords
// window object

// 10 The 'this' keyword
// 'this' references the object that is executing the current function
// if its a method then 'this' references -> the obj
// if its a function -> we get the window / global object
// if its a function with a constructor used with the 'new' keyword 'this' will reference the new empty object

// 11 Changing 'this'
// using the const self = this;
// using the .bind(this) OLD
// using arrow function, modern approach

// 12 Ex. 1

// sum(1, 2, 3,4) => 10

function sum(...numbers) {
  const total = numbers.reduce((a, b) => a + b);
  return total;
}

console.log(sum(1, 2, 3, 4));

function aSum(numbers) {
  let total = 0;
  for (let value of numbers) total += value;
  return total;
}

console.log(aSum([1, 2, 3, 4]));

////////////////////////////////////

console.log(hSum([1, 2, 3, 4]));

function hSum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

////////////////////////////////////

// 13 Ex 2

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area);

////////////////////////////////////

// 14 Ex 3

const rNumbers = [1, 2, 3, 4];

try {
  const count = countOccurences(rNumbers, 1);
  console.log(count);
} catch (e) {
  alert(e);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array");

  // let count = 0;
  //for (let element of array)
  //if (element === searchElement)
  //count++;
  //return count;

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  }, 0);
}
