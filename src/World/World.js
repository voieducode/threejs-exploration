import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
import { createCamera } from "./components/camera.js";
import { createControls } from "./systems/controls";
import { createCube } from "./components/cube.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { createScene } from "./components/scene.js";

let scene;
let camera;
let renderer;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const cube = createCube();
    const { ambientlight, mainLight } = createLights();

    // disabled mesh rotation
    // loop.updatables.push(cube);
    loop.updatables.push(controls);
    controls.target.copy(cube.position);

    scene.add(ambientlight, mainLight, cube);

    // eslint-disable-next-line no-unused-vars
    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
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
