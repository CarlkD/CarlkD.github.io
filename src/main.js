import { World } from './World/world.js';

function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);
  
    world.start();
}

main();