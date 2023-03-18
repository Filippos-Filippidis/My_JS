// Control Flow

// If ..else

let hour = 20;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else console.log("Good Evening");

// Switch & case

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// For

for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 0; i--) {
  if (i % 2 !== 0) console.log(i);
}

// While

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do while - Are always executed at least once..
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

// For...in

const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

// For...of

for (let color of colors) {
  console.log(color);
}

// Break and continue..

let k = 0;

while (k <= 10) {
  if (k === 5) break;
  console.log(k);
  k++;
}

let h = 0;

while (h <= 10) {
  if (h % 2 === 0) {
    h++;
    continue;
  }
  console.log(h);
  h++;
}

console.log("/////////////////////////////////");

function max(a, b) {
  return a > b ? a : b;
}

let result = console.log(max(6, 5));

console.log("/////////////////////////////////");

let width = 1080;
let height = 1920;

function landscape(width, height) {
  return width < height;
}

console.log(landscape(width, height));

console.log("/////////////////////////////////");

function fizzBuzz(input) {
  if (typeof input != "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "fizzbuzz";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "buzz";
  return input;
}

console.log(fizzBuzz(7));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(false));

console.log("/////////////////////////////////");

// Ex.13

function checkSpeed(speed) {
  if (speed <= 74) return "ok";

  let temp = speed - 70;
  let points = Math.floor(temp / 5);

  if (points > 12) return "Your license is suspended";
  else return points;
}

console.log(checkSpeed(88));

// Ex.14
