// 02 Adding elemetns

const numbers = [3, 4];
// numbers = []; doesnt work

// const in this array doesnt stop us from modifying the array
// we can still add or remove content

console.log(numbers.length);

// End
numbers.push(5, 6);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

/////////////////////////////////////////////////////////////

// Ex 3 - Finding Elements Primitive Types

const newNumbers = [1, 2, 3, 1, 4];

console.log(newNumbers.indexOf("a"));
console.log(newNumbers.indexOf(2));
console.log(newNumbers.lastIndexOf(1));

console.log(newNumbers.includes(1));
// you can specify where to start the search from in the array
console.log(newNumbers.indexOf(2, 2));

/////////////////////////////////////////////////////////////

// Ex 4 - Finding Elements Reference Types

const courses = [
  { id: 1, name: "a" },
  { id: 1, name: "a" },
];

// with reference types you need to use the 'find' method
const course = courses.find(function (course) {
  return course.name === "a";
});

const course1 = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(course);
console.log(course1);

/////////////////////////////////////////////////////////////

// Ex 5 Arrow Functions (use instead of the above method)
// read it as: course goes to course.name === 'a'
const course2 = courses.find((course) => course.name === "a");
console.log(course2);

/////////////////////////////////////////////////////////////

// Ex 6 - Removing Elements

let moreNumbers = [1, 2, 3, 4];
console.log(moreNumbers);

// End - returns the last element of the array or the reduced array
const last = moreNumbers.pop();
console.log(last);
console.log(moreNumbers);

// Beginning - Similar as before. Removes the first items and returns it or reduces the array
const first = moreNumbers.shift();
console.log(first);
console.log(moreNumbers);

// Middle - remove items with a starting index as well how many items to remove
moreNumbers.splice(0, 2);
console.log(moreNumbers);

/////////////////////////////////////////////////////////////

// Ex 7 Emptying an array

let otherNumbers = [1, 2, 3, 4];
let another = otherNumbers;

// Empty the array
otherNumbers = [];

// Solution 2 - Set length to zero

otherNumbers.length = 0; // Preffered!!

// Solution 3 - splice
otherNumbers.splice(0, numbers.length);

console.log(otherNumbers);
// This array remains unaffected
console.log(another);

/////////////////////////////////////////////////////////////

// Ex 8 Combining and slicing arrays

const fArray = [1, 2, 3];
const sArray = [4, 5, 6];

combined = fArray.concat(sArray);

// Get a slice defined by the parameters
const sliced = combined.slice(2, 4);

// Get a slice defining the start index
const fSliced = combined.slice(2);

// Get a copy
const xSlice = combined.slice();

console.log(combined);
console.log(sliced);
console.log(fSliced);
console.log(xSlice);

// when used with objects the array points to the actual object and not a copy!!

const objTest = [{ id: 1 }];
const secTest = [4, 5, 6];

const combined1 = objTest.concat(secTest);
console.log(combined1);

objTest[0].id = 10;
console.log(combined1);

/////////////////////////////////////////////////////////////

// Ex 9 - The Spread Operator - like combining

const tArray = [1, 2, 3];
const zArray = [4, 5, 6];

// const nCombine = [...tArray, ...zArray];
// console.log(nCombine);

const nCombine = [...tArray, "a", ...zArray];
console.log(nCombine);

const copy = [...nCombine];
console.log(copy);

/////////////////////////////////////////////////////////////

// Ex 10 - Iterating an array

const iArray = [1, 2, 3];

for (let number of iArray) console.log(number);

iArray.forEach((number) => console.log(number));
iArray.forEach((number, index) => console.log(index, number));

/////////////////////////////////////////////////////////////

// Ex 11 - Joining Arrays

const myNumbers = [1, 2, 3];
const joined = myNumbers.join(",");
console.log(joined);

const msg = "This is my first message";
const parts = msg.split(" ");
console.log(parts);

const combo = parts.join("-");
console.log(combo);

/////////////////////////////////////////////////////////////

// Ex 12 - Sort Array

const sorting = [2, 4, 1];
sorting.sort();

console.log(sorting);
console.log(sorting.reverse());

const nCourses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
];

//This wont sort the items
nCourses.sort();
console.log(nCourses);

// This will sort the items
nCourses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
});

console.log(nCourses);

/////////////////////////////////////////////////////////////

// Ex. 13 - Testing the elements of an Array

const tNumbers = [1, 2, -1, 3];

// checks every
const allPos = tNumbers.every(function (value) {
  return value >= 0;
});

// checks if at least one element matches the given criteria
const atLeastOne = tNumbers.some(function (value) {
  return value >= 0;
});

console.log(allPos);
console.log(atLeastOne);

/////////////////////////////////////////////////////////////

// Ex14 - Filtering an Array

const filtered = tNumbers.filter((n) => n >= 0);

console.log(filtered);

/////////////////////////////////////////////////////////////

// Ex. 15 - Mapping an Array

// const items = filtered.map((n) => "<li>" + n + "<li>");
// console.log(items);

// const html = "<ul" + items.join(" ") + "</ul>";
// console.log(html);

// const items = filtered.map((n) => "<li>" + n + "<li>");
// console.log(items);

// Chainning - calling a method which result is immediately used
// Simple chainning

// const items = tNumbers.filter((n) => n >= 0).map((n) => ({ value: n }));

// console.log(items);

// Complex Chainning
const items = tNumbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);
console.log(items);

/////////////////////////////////////////////////////////////

// Ex. 16 - Reducing an Array

// This is the same as
let sum = 0;
for (let n of tNumbers) sum += n;

console.log(sum);

// This
const newSum = tNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(newSum);

// Even shorter
const shortSum = tNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(shortSum);

/////////////////////////////////////////////////////////////

// Ex 17 - Array from range

const exNumbers = arrayOfNumbers(-5, 5);
console.log(exNumbers);

function arrayOfNumbers(min, max) {
  let theArray = [];
  for (let i = min; i <= max; i++) {
    theArray.push(i);
  }
  return theArray;
}

/////////////////////////////////////////////////////////////

// Ex 18

const yos = [1, 2, 3, 4];
const test = 1;

function includes(array, searchElement) {
  for (let n of yos) if (n === searchElement) return true;
  return false;
}

console.log(includes(yos, test));

/////////////////////////////////////////////////////////////

// Ex 19

const eX = [1, 2, 3, 4];
const output = except(eX, [4, 5]);
console.log(output);

function except(zArray, excluded) {
  let oArray = [];
  for (let n of zArray) if (!excluded.includes(n)) oArray.push(n);
  return oArray;
}

/////////////////////////////////////////////////////////////

// Ex 20
