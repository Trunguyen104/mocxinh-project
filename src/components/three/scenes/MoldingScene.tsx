"use client";

import { useMemo } from "react";
import { createPaperMaterial } from "@/components/three/materials/createPaperMaterial";
import { seededUnit } from "@/lib/seededRandom";

interface MoldingSceneProps {
  weight: number;
}

export function MoldingScene({ weight }: MoldingSceneProps) {
  const fiberMat = useMemo(() => createPaperMaterial(), []);

  const fibers = useMemo(() => {
    const items: { x: number; z: number; rot: number }[] = [];
    for (let i = 0; i < 80; i++) {
      items.push({
        x: (seededUnit(i, 4) - 0.5) * 2.2,
        z: (seededUnit(i, 5) - 0.5) * 1.6,
        rot: seededUnit(i, 6) * Math.PI,
      });
    }
    return items;
  }, []);

  if (weight <= 0.001) return null;

  return (
    <group scale={weight} visible={weight > 0.01}>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[3.2, 2.2, 0.08]} />
        <meshStandardMaterial color="#5c4a38" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} material={fiberMat}>
        <planeGeometry args={[2.8, 1.9]} />
      </mesh>
      {fibers.map((f, i) => (
        <mesh key={i} position={[f.x, 0.08 + (i % 5) * 0.002, f.z]} rotation={[0, f.rot, 0]}>
          <boxGeometry args={[0.25, 0.003, 0.008]} />
          <meshStandardMaterial color="#a89878" roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 0.2, 1.2]}>
        <boxGeometry args={[3.4, 0.1, 0.15]} />
        <meshStandardMaterial color="#6b5a42" />
      </mesh>
    </group>
  );
}
