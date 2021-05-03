import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
import { createCamera } from "./components/camera.js";
import { createControls } from "./systems/controls";
import { createLights } from "./components/lights.js";
import { createMeshGroup } from "./components/meshGroup.js";
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

    const meshGroup = createMeshGroup();
    const { ambientlight, mainLight } = createLights();

    loop.updatables.push(meshGroup);

    // const controls = createControls(camera, renderer.domElement);
    // loop.updatables.push(controls);
    // controls.target.copy(cube.position);

    scene.add(ambientlight, mainLight, meshGroup);

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
