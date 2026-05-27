"use client";

import { Suspense } from "react";
import { ContactShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import { getSceneWeight } from "@/config/scrollStoryConfig";
import { GrassFieldScene } from "@/components/three/scenes/GrassFieldScene";
import { GrassBundlesScene } from "@/components/three/scenes/GrassBundlesScene";
import { PulpProcessScene } from "@/components/three/scenes/PulpProcessScene";
import { MoldingScene } from "@/components/three/scenes/MoldingScene";
import { FinishedPaperScene } from "@/components/three/scenes/FinishedPaperScene";

interface StoryExperienceProps {
  progress: number;
}

function StoryLights({ progress }: { progress: number }) {
  const warmth = 0.85 + progress * 0.15;
  return (
    <>
      <ambientLight intensity={0.45 * warmth} color="#f5f0e6" />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.1}
        color="#fff8ee"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#8a9e7a" />
    </>
  );
}

export function StoryExperience({ progress }: StoryExperienceProps) {
  const wField = getSceneWeight(progress, "grass-field");
  const wBundles = getSceneWeight(progress, "grass-bundles");
  const wPulp = getSceneWeight(progress, "pulp-process");
  const wMold = getSceneWeight(progress, "molding");
  const wPaper = getSceneWeight(progress, "finished-paper");

  const cameraZ = 5.5 - progress * 1.2;
  const cameraY = 1.2 + progress * 0.3;

  return (
    <Suspense fallback={null}>
      <PerspectiveCamera
        makeDefault
        position={[0, cameraY, cameraZ]}
        fov={42}
        near={0.1}
        far={100}
      />
      <StoryLights progress={progress} />
      <Environment preset="park" environmentIntensity={0.35} />

      <group position={[0, -0.2, 0]}>
        <GrassFieldScene weight={wField} />
        <GrassBundlesScene weight={wBundles} />
        <PulpProcessScene weight={wPulp} />
        <MoldingScene weight={wMold} />
        <FinishedPaperScene weight={wPaper} interactive={progress > 0.82} />
      </group>

      <ContactShadows position={[0, -0.48, 0]} opacity={0.4} scale={12} blur={2.5} far={4} />
    </Suspense>
  );
}
