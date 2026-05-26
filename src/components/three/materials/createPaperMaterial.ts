import * as THREE from "three";

/** Vật liệu giấy thủ công — thay bằng custom shader / map khi có asset thật */
export function createPaperMaterial() {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color("#e8dcc8"),
    roughness: 0.92,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });
}

export function createGrassMaterial() {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color("#5c6b47"),
    roughness: 0.85,
    metalness: 0,
  });
}

export function createWaterMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#7a9e8a"),
    roughness: 0.1,
    metalness: 0,
    transmission: 0.6,
    thickness: 0.5,
    transparent: true,
    opacity: 0.75,
  });
}
