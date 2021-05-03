import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  // Create a directional light
  const ambientlight = new HemisphereLight("white", "darkslategrey", 3);
  const mainLight = new DirectionalLight("white", 5);

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientlight, mainLight };
}

export { createLights };
