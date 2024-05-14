"use client";

import { Canvas } from "@react-three/fiber";
import Donut from "./Donut";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "#000000" }}>
      <directionalLight intensity={2} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Donut />
    </Canvas>
  );
}
