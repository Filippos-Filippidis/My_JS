let firstName = "Phil";
let secondName = "Pidis";
console.log(firstName + " " + secondName);

//////////////////////////////////////////

// Primitives + Value Types

// Strings

let newName = "Phil";

// Number Literal

let age = 30;

// Boolean Literal

let isApproved = true;
let isDisapproved = false;

// Undefined -

let thirdName = undefined;

// Null - to clear the value of a variable

let lastName = null;
let selectedColor = null;

//////////////////////////////////////////

// JS id a Dynamic Type
// Variables can change type at runtime

console.log(typeof newName);
newName = 1;
console.log(typeof newName);

//////////////////////////////////////////

// Reference Types

// Objects

let person = {
  name: "Phil",
  age: 30,
};

let selection = "name";
person[selection] = "Mary";

console.log(person);
console.log(person.name);
console.log(person["age"]);

// Arrays - Data structure to represent a list of items

let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[1]);

selectedColors[2] = "1";
console.log(selectedColors);
console.log(selectedColors.length);

// Functions

function greet(msg) {
  console.log("Hello " + msg);
}

function greet(msg, lastLName) {
  console.log("Hello " + msg + " " + lastLName);
}

greet("Mary");
let msg = "John";
greet(msg, "Smith");

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);

//////////////////////////////////////////

// Arithmetic

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x % y);
console.log(x ** y);

// increment (++)

console.log(x);
console.log(++x); // add 1 before runtime
console.log(x++); //adds one after runtime
console.log(x);

// decrement (--)

console.log(x);
console.log(--x);
console.log(x--);
console.log(x);

// Assignment

let z = 10;
z++; //reads as z = z+1

z += 5; // ads 5 just as z = z +5
z *= 5;

// Comparison

let i = 1;

// Relational Operators
console.log(x > 0);
console.log(x >= 1);
console.log(x < 0);

// Equality

// Strict Equality Operator ( Same type, same value)
console.log(x === 0);
console.log(x !== 0);
console.log(true === 1);

// Lose Equality
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

// Ternary Operator

let points = 100;

// if condition is met set to first value else use other value
let type = points >= 100 ? "gold" : "silver";
console.log(type);

// Logical

// AND &&
// returns true if both operands are TRUE
console.log(true && true);
console.log(true && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome1 = false;
let goodCreditScore1 = false;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log("Eligible", eligibleForLoan1);

// NOT (!)

let applicationRefused = !eligibleForLoan1;

console.log("Application Refused", applicationRefused);

//////////////////////////////////////////

let a = "red";
let b = "blue";

console.log(a);
console.log(b);

let tempA = a;
a = b;
b = tempA;

console.log(a);
console.log(b);
