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
