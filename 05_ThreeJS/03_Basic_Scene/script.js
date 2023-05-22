// Scene
const scene = new THREE.Scene();

// Create Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // or 'red'
const mesh = new THREE.Mesh(geometry, material);

// Create Cone
const geo1 = new THREE.ConeGeometry(1, 2, 8);
const material1 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(geo1, material1);
cone.position.x = -2;

// Add Geometry to the Scene
scene.add(mesh);
scene.add(cone);

// Viewport Size
const sizes = {
  width: 800,
  height: 600,
};

// Create Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = -1;
camera.position.y = 0;
scene.add(camera);

// Create Renderer & Canvas
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
