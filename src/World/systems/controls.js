import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.autoRotate = true;
  controls.tick = () => {
    controls.update();
  };
  return controls;
}

export { createControls };
