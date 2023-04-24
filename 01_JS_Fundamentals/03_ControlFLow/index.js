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

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");

    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// Ex.15

const array = [1, 2, 3, null, undefined, 5];

function countTruthy(array) {
  let temp = 0;
  let count = 0;
  for (let item of array) {
    if (
      item !== null &&
      item !== undefined &&
      item !== "" &&
      item !== false &&
      item !== 0 &&
      item !== NaN
    )
      temp += 1;

    if (item) count += 1;
  }
  console.log("TEMP", temp);
  console.log("COUNT", count);
}
countTruthy(array);

// Ex.17

function sum(limit) {
  let varA = 3;
  let varB = 5;
  let count = 0;

  let i = 1;
  while (varA * i <= limit) {
    count += varA * i;
    i++;
  }
  console.log(count);
  let j = 1;
  while (varB * j <= limit) {
    count += varB * j;
    j++;
  }

  for (let k = 0; k <= limit; k++) if (k % 3 === 0 || k % 5 === 0) sum += k;

  return count;
}
console.log(sum(10));

// Ex.18

const marks = [80, 80, 50];

function calculateGrades(marks) {
  const average = calculateAverage(marks);

  if (average <= 59) return "F";
  if (average > 60 && average < 69) return "D";
  if (average >= 70 && average <= 79) return "C";
  if (average >= 80 && average <= 89) return "B";
  if (average >= 90) return "A";
}

console.log(calculateGrades(marks));

function calculateAverage(array) {
  let average = 0;

  for (let value of array) {
    average += value;
  }
  average /= marks.length;
  return average;
}

// Ex.19

showStars(10);

function showStars(rows) {
  let text = "";
  for (let i = 1; i <= rows; i++) {
    text += "*";
    console.log(text);
  }
}

// Ex 20

showPrimes(20);

function showPrimes(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 1) console.log(i);
  }
}
