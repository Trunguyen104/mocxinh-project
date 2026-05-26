"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createGrassMaterial } from "@/components/three/materials/createPaperMaterial";

interface GrassBundlesSceneProps {
  weight: number;
}

export function GrassBundlesScene({ weight }: GrassBundlesSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const material = useMemo(() => createGrassMaterial(), []);

  const bundles = useMemo(
    () =>
      [-2, 0, 2].map((x) => ({
        position: [x, 0.4, 0] as [number, number, number],
      })),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.05 * weight;
  });

  if (weight <= 0.001) return null;

  return (
    <group ref={groupRef} scale={weight} visible={weight > 0.01}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#9a8468" roughness={1} />
      </mesh>
      {bundles.map((b, i) => (
        <group key={i} position={b.position}>
          <mesh material={material} position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.35, 0.4, 1.2, 8]} />
          </mesh>
          <mesh material={material} position={[0, 1.1, 0]}>
            <cylinderGeometry args={[0.32, 0.35, 0.8, 8]} />
          </mesh>
          <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.38, 0.03, 8, 16]} />
            <meshStandardMaterial color="#6b5a42" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
