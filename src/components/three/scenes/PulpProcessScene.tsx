"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { createWaterMaterial } from "@/components/three/materials/createPaperMaterial";

interface PulpProcessSceneProps {
  weight: number;
}

export function PulpProcessScene({ weight }: PulpProcessSceneProps) {
  const bowlRef = useRef<THREE.Group>(null);
  const waterMat = useMemo(() => createWaterMaterial(), []);

  useFrame((state) => {
    if (!bowlRef.current) return;
    bowlRef.current.rotation.y = state.clock.elapsedTime * 0.15 * weight;
  });

  if (weight <= 0.001) return null;

  return (
    <group ref={bowlRef} scale={weight} visible={weight > 0.01}>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[1.8, 1.6, 0.6, 32]} />
        <meshStandardMaterial color="#7a6b52" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.05, 0]} material={waterMat}>
        <cylinderGeometry args={[1.5, 1.5, 0.25, 32]} />
      </mesh>
      <Float speed={2} floatIntensity={0.4 * weight}>
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <MeshDistortMaterial
            color="#c4b896"
            roughness={0.95}
            distort={0.35}
            speed={2}
          />
        </mesh>
      </Float>
      {Array.from({ length: 24 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 0.8) * 0.9,
            0.15 + (i % 3) * 0.08,
            Math.sin(i * 0.8) * 0.9,
          ]}
        >
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#8a9a6e" roughness={1} />
        </mesh>
      ))}
    </group>
  );
}
