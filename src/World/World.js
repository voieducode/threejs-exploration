import { createAxesHelper, createGridHelper } from "./components/helpers.js";

import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
import { Train } from "./components/Train/Train.js";
import { createCamera } from "./components/camera.js";
import { createControls } from "./systems/controls";
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
    const train = new Train();
    const { ambientlight, mainLight } = createLights();

    loop.updatables.push(controls, train);
    scene.add(ambientlight, mainLight, train);

    // eslint-disable-next-line no-unused-vars
    const resizer = new Resizer(container, camera, renderer);

    scene.add(createAxesHelper(), createGridHelper());
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
