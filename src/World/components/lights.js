import { AmbientLight, DirectionalLight } from "three";

function createLights() {
  // Create a directional light
  const ambientlight = new AmbientLight("white", 2);
  const mainLight = new DirectionalLight("white", 5);

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientlight, mainLight };
}

export { createLights };
