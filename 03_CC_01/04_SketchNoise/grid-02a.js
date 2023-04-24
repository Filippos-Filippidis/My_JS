const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // Define columns and rows
    const cols = 10;
    const rows = 10;
    const numCells = cols * rows;

    // Define grid bounding area
    const gridw = width * 0.8;
    const gridh = height * 0.8;

    // Define cell size
    const cellw = gridw / cols;
    const cellh = gridh / rows;

    // Define margins around grid
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0; i < numCells; i++) {
      // Define cell location system
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Define cell positions
      const x = col * cellw;
      //const x = col * cellw + margx + cellw * 0.5;
      const y = row * cellh;
      //const y = row * cellh + margy + cellh * 0.5;

      // Define line
      const w = cellw * 0.8;
      const h = cellh * 0.8;

      // Play with last parameter + frame
      const n = random.noise2D(x, y, 0.001);
      // Play with factor
      const angle = n * Math.PI * 0.2;
      //const scale = ((n + 1) / 2) * 30;
      //const scale = n * 0.5 * 0.5 * 30;
      const scale = math.mapRange(n, -1, 1, 1, 30);

      // Translate the context and location to start drawing
      // Instead of calling the translate function 3 times  we could also add these to x + y
      // and call the function once
      context.save();
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);
      context.rotate(angle);

      // Start drawing
      context.lineWidth = scale;
      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
