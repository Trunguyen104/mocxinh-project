"use client";

import { Canvas } from "@react-three/fiber";
import { StoryExperience } from "@/components/three/StoryExperience";

interface StoryCanvasProps {
  progress: number;
  className?: string;
}

export function StoryCanvas({ progress, className = "" }: StoryCanvasProps) {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <StoryExperience progress={progress} />
      </Canvas>
    </div>
  );
}
