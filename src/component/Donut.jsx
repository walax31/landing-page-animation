import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import { useControls } from "leva";

const Donut = () => {
  const { nodes } = useGLTF("/assets/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.1, min: 0, max: 3, step: 0.5 },

    roughness: { value: 0, min: 0, max: 1, step: 0.1 },

    transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 0.02, min: 0, max: 1 },

    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        hello world!
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};
export default Donut;
