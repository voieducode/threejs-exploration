import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.target.y = 1;
  controls.tick = () => {
    controls.update();
  };
  return controls;
}

export { createControls };
