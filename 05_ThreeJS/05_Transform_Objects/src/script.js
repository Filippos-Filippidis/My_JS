import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cube2.position.set(2, 0, 0);
cube3.position.set(4, 0, 0);

group.add(cube1, cube2, cube3);
group.scale.y = 0.75;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Positioning
// mesh.position.x = -1;
// mesh.position.y = -1;
// mesh.position.z = -1;
// mesh.position.length(); - Get the distance from 0,0,0. returns the position vector
// mesh.position.distanceTo(); - Get distance another vector
// mesh.position.normalize(); - Normalize vector

// Sets a position as a vector (x, y, z)
mesh.position.set(0.7, -0.6, 0);
scene.add(mesh);

// Scale - Both methods work
// mesh.scale.x = 0.5;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.25;

mesh.scale.set(0.5, 0.5, 0.25);

// Rotate Objects
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// Quarternion - These get updated when rotation gets updates and vice versa

// Axes Helper
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = -0.5;
camera.position.y = 0.25;
camera.position.z = 2;
scene.add(camera);

camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
