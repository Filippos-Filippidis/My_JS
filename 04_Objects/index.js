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

const circle = new Circle(1);

// Objects are dynamic, you can add and remove properties and methods

// Ex 8.
