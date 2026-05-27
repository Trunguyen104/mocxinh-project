"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { createPaperMaterial } from "@/components/three/materials/createPaperMaterial";

interface FinishedPaperSceneProps {
  weight: number;
  /** Bật xoay theo chuột khi ở cảnh cuối */
  interactive?: boolean;
}

export function FinishedPaperScene({ weight, interactive = false }: FinishedPaperSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => createPaperMaterial(), []);
  const { pointer } = useThree();
  const targetRot = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!meshRef.current || weight < 0.5) return;

    if (interactive) {
      targetRot.current.y = pointer.x * 0.35;
      targetRot.current.x = pointer.y * 0.15;
    }

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRot.current.y,
      0.06,
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRot.current.x,
      0.06,
    );
  });

  if (weight <= 0.001) return null;

  return (
    <group scale={weight} visible={weight > 0.01}>
      <mesh ref={meshRef} material={material} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.04, 3.2]} />
      </mesh>
      <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#d4c4a8" roughness={1} />
      </mesh>
    </group>
  );
}
