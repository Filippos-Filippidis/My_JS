// 01

// variables
// let radius = 1;
// let x = 1;
// let y = 1;

// vs
// object

// (OOP) Object Oriented Programming

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("Hi");
//   },
// };

// circle.draw();

// 03

// Construction Function
// USe Pascal notation for these

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const circle = new Circle(1);

// Objects are dynamic, you can add and remove properties and methods

// Ex 8. Enumerating Properties of an Object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(circle)) console.log(entry);

if ("radius" in circle) console.log("yes");
if ("color" in circle) console.log("yes");
else console.log("no");

// Ex.9 Cloning an Object

// const another = {};

// for (let key in circle) another[key] = circle[key];

// const another = Object.assign({}, circle);
// or you can add things liek so
//const another = Object.assign({ color: "yellow" }, circle);

//Simplest way to spread an object from one to another
const another = { ...circle };

console.log(another);

// Ex. 12 Strings

// string primitive
const msg = "This is my first msg";
//msg.
console.log(msg.length);
console.log(msg.includes("my"));

// string object
const anotherString = new String("hi");

// Ex. 13 Template Literals

const newMsg = "this is my\n first message";
console.log(newMsg);

// Use the backtick for convinience and cleanliness

const testMsg = `Hi John,

Thank you for joining my mailist FileList.apply
Regards,
Mosh`;

console.log(testMsg);

const name = "Stef";
// You can add anything that returns a value
const atestMsg = `Hi ${name} ${2 + 3},

Thank you for joining my mailist FileList.apply
Regards,
Mosh`;

console.log(atestMsg);

// Ex 15 - Date

const now = new Date();
console.log(now);

const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

// now.getDate();
//now.setDate();

const address = {
  street: "5th Avenue",
  city: "NYC",
  zipcode: "123456",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

// Ex.16

// Factory Function

function newAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let ads = newAddress("ef", "Athens", "14551");
console.log(ads);

// Constructor Function

function aAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

let ad1 = new aAddress("a", "b", "c");
let ad2 = new aAddress("a", "b", "c");
console.log(ad1);
console.log(ad2);

// Ex 17
// Object Equality

function areEqual(ad1, ad2) {
  return (
    ad1.street === ad2.street &&
    ad1.city === ad2.city &&
    ad1.zipCode === ad2.zipCode
  );
}

console.log(areEqual(ad1, ad2));

function areSame(ad1, ad2) {
  return ad1 === ad2;
}

console.log(areSame(ad1, ad2));

// Ex. 18

const blogPost = {
  title: "t",
  body: "b",
  author: "a",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "a", body: "b" },
  ],
  isLive: true,
};

console.log(blogPost);

// Ex 19

function draftPost(title, text, author) {
  this.title = title;
  this.text = text;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new draftPost("a", "b", "c");
console.log(post);

// Ex.20

let priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson:0, maxPerPerson: 10},
  { label: '$$', tooltip: 'Moderate', minPerPerson:11, maxPerPerson: 20}
  { label: '$$$', tooltip: 'Expensive', minPerPerson:21, maxPerPerson: 50}
];

let restaurants = [ {averagePerPerson: 5}]