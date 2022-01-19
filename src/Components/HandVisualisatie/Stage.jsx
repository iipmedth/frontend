import React from "react";

import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  BakeShadows,
} from "@react-three/drei";

const Stage = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, -10, 2]} intensity={1} />
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      <PerspectiveCamera
        makeDefault={false}
        far={42.09}
        near={0.01}
        fov={35}
        position={[0.05, 0.17, -0.6]}
        rotation={[-3.02, 0.1, 3.13]}
      />
    </>
  );
};

export default Stage;
