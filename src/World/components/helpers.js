import { AxesHelper, GridHelper } from "three";

function createAxesHelper() {
  const helper = new AxesHelper(3);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

function createGridHelper() {
  return new GridHelper(6);
}

export { createAxesHelper, createGridHelper };
