import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
import { createCamera } from "./components/camera.js";
import { createControls } from "./systems/controls";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { createScene } from "./components/scene.js";
import { loadBirds } from "./components/birds/birds.js";

let scene;
let camera;
let renderer;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement);
    const { ambientlight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientlight, mainLight);

    // eslint-disable-next-line no-unused-vars
    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    // move the target to the center of the front bird
    controls.target.copy(parrot.position);
    scene.add(parrot, flamingo, stork);
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
