import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// We want our animation to run independently from the browser (FPS) frames per second
// To do this we use time by using the native date class or the ThreeJS class clock
// Both are shown below

// Native Date class

// // Time
// let time = Date.now();

// // Animations
// const tick = () => {
//   // Time
//   const currTime = Date.now();
//   const deltaTime = currTime - time;
//   time = currTime;

//   // Update Objects
//   mesh.rotation.y += 0.001 * deltaTime;

//   // Render
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// tick();

// Native Clock Class

// Clock
// DO NOT USE .getDelta() !!!!!
const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// Animations
const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime();

  // Update Objects
  mesh.rotation.y = elapsedTime;
  mesh.position.y = Math.sin(elapsedTime);

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
