const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  animate: true,
  fps: 2,
};

let lastFrame;

const sketch = () => {
  return ({ context, width, height, frame }) => {
    // console.log(lastFrame);
    if (frame == lastFrame) return;
    lastFrame = frame;

    // console.log(frame, lastFrame);

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.05;
    const iy = height * 0.05;

    const off = width * 0.02;

    let x, y;

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = "#4287f5";
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.strokeStyle = "#FFA07A";
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
