import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  let direction = 1;
  camera.tick = () => {
    camera.position.z += direction / 60.0;
    if (camera.position.z > 20) {
      direction = -1;
    } else if (camera.position.z < 5) {
      direction = 1;
    }
  };

  return camera;
}

export { createCamera };
