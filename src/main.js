import { World } from "./World/World.js";

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // create a new world
  const world = new World(container);

  // start the animation loop
  world.start();

  let started = true;
  window.addEventListener("click", () => {
    if (started) {
      world.stop();
      started = false;
    } else {
      world.start();
      started = true;
    }
  });
}

main();
