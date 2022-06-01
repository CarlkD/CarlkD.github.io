import { BoxBufferGeometry, MathUtils, Mesh, MeshStandardMaterial, Color } from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: 'white' });

  material.roughness = 0,2;
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.x = 0;

  const radiansPerSecond = MathUtils.degToRad(30);

  // create a Mesh containing the geometry and material

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;


  };

  return cube;
}

export { createCube };