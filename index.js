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
