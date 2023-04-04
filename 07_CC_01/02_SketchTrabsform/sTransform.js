const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    //TRANSLATIONS

    // Start by saving the current global cordinate system
    context.save();

    // translate[0,0] to a given point - Define the new coordinate system
    context.translate(x, y);
    context.rotate(0.3);

    context.beginPath();

    // Create rect at that newly defined [0,0]
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();

    // Restore coordinate system to the previous saved state
    context.restore();
  };
};

canvasSketch(sketch, settings);
