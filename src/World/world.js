import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let scene;
let renderer;
let loop;

class World {
// 1. Create an instance of the World app
constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    console.log(cube);

    loop.updatables.push(cube);

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);    
}

// 2. Render the scene
render() {
    renderer.render(scene, camera);
}

start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}



export { World };