import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import flamingoURL from "/assets/models/Flamingo.glb";
import parrotURL from "/assets/models/Parrot.glb";
import { setupModel } from "./setupModel";
import storkURL from "/assets/models/Stork.glb";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    await loader.loadAsync(parrotURL),
    await loader.loadAsync(flamingoURL),
    await loader.loadAsync(storkURL),
  ]);

  console.log("Squaaawk!", parrotData);
  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0 - 2.5, -10);

  return { parrot, flamingo, stork };
}

export { loadBirds };
