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
