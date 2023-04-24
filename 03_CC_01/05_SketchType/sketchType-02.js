const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

let manager;

let text = "A";
let fontSize = 1200;
let fontFamily = "serif";
let fontStyle = ["normal ", "italic ", "oblique "];
let fontWeight = [
  "normal",
  "bold",
  "bolder",
  "lighter",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    context.font = fontStyle[0] + fontSize + "px " + fontFamily;
    // Also using a template literal
    //context.font = `${fontSize}px ${fontFamily}`;

    context.textBaseline = "top";
    //context.textAlign = "center";

    const metrics = context.measureText(text);
    //console.log(metrics);

    mx = metrics.actualBoundingBoxLeft * -1;
    my = metrics.actualBoundingBoxAscent * -1;
    mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    const x = (width - mw) * 0.5 - mx;
    const y = (height - mh) * 0.5 - my;

    context.save();
    context.translate(x, y);

    context.beginPath();
    context.rect(mx, my, mw, mh);
    context.stroke();

    context.fillText(text, 0, 0);
    context.restore();
  };
};

const onKeyUp = (e) => {
  text = e.key.toUpperCase();
  manager.render();
};

document.addEventListener("keyup", onKeyUp);

const start = async () => {
  manager = await canvasSketch(sketch, settings);
};
start();

/*
const url = "https://picsum.photos/200";

const loadSomeImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = url;
  });
};

const start = async () => {
  const img = await loadSomeImage(url).then((img) => {
    console.log("image width", img.width);
  });
  console.log("this line");
};

// const start = () => {
//   loadSomeImage(url).then((img) => {
//     console.log("image width", img.width);
//   });
//   console.log("this line");
// };

start();
*/
