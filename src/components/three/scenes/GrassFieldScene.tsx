"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createGrassMaterial } from "@/components/three/materials/createPaperMaterial";
import { seededUnit } from "@/lib/seededRandom";

interface GrassFieldSceneProps {
  weight: number;
}

export function GrassFieldScene({ weight }: GrassFieldSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const material = useMemo(() => createGrassMaterial(), []);

  const blades = useMemo(() => {
    const items: { position: [number, number, number]; scale: number }[] = [];
    for (let i = 0; i < 120; i++) {
      items.push({
        position: [(seededUnit(i, 1) - 0.5) * 8, 0, (seededUnit(i, 2) - 0.5) * 6],
        scale: 0.4 + seededUnit(i, 3) * 0.8,
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || weight < 0.01) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      child.rotation.z = Math.sin(t * 1.2 + i * 0.3) * 0.12 * weight;
    });
  });

  if (weight <= 0.001) return null;

  return (
    <group ref={groupRef} visible={weight > 0.01}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#8b7355" roughness={1} />
      </mesh>
      {blades.map((blade, i) => (
        <mesh
          key={i}
          position={blade.position}
          scale={[0.04 * blade.scale, blade.scale * 1.2, 0.04]}
          material={material}
        >
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      ))}
    </group>
  );
}
