// importing the canvas sketch library and storing a reference to it
const canvasSketch = require("canvas-sketch");

// Pixels values for creating the canvas element
const settings = {
  dimensions: [2048, 2048],
  //dimensions: 'A4',
  //pixelsperInch: 300
  //see documentation
};

// function called sketch which returns another function that doesnt have a name
// this fucntion is called byt he library itself and gives us properties about the canvas
// such as context, width, height
// this setups the background for our canvas (see context.fillStyle & fillRect)
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

// This is calling the library using the sketch function and settings as parameters
canvasSketch(sketch, settings);

// Copy the address of the live server running from the terminal to access the html file
// Ctrl + C - closes the live server
