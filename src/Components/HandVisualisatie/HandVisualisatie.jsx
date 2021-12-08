import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  BakeShadows,
} from "@react-three/drei";

const HandVisualisatie = (...props) => {
  const group = useRef();
  useGLTF.preload("/test.glb");

  const [hovered, setHover] = useState(false);
  const { nodes, materials } = useGLTF("/test.glb");
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <group
            ref={group}
            {...props}
            dispose={null}
            scale={17.09}
            position={[0, -2, 0]}
          >
            <mesh
              geometry={nodes.Hand_switchable.geometry}
              material={materials.Vera}
              //   material-color={hovered ? "red" : "green"}
              position={[0.03, 0, 0]}
              onClick={(event) => console.log("Hand")}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
            />
            <mesh
              geometry={nodes.pinky_switchable.geometry}
              material={materials["Hawaiian Passion 2"]}
              position={[0.03, 0, 0]}
              onClick={(event) => console.log("Pinky")}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
            />
            <mesh
              geometry={nodes.Ring_switchable.geometry}
              material={materials["Aurora 1"]}
              position={[0.03, 0, 0]}
              onClick={(event) => console.log("Ring")}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
            />
            <mesh
              geometry={nodes.middle_switchable.geometry}
              material={materials["Aurora 2"]}
              position={[0.03, 0, 0]}
              onClick={(event) => console.log("middle")}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
            />
            <mesh
              geometry={nodes.point_switchable.geometry}
              material={materials["Time Capsule"]}
              position={[0.03, 0, 0]}
              onClick={(event) => console.log("index")}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
            />
            <mesh
              geometry={nodes.thumb_switchable.geometry}
              material={materials.Aurora}
              position={[0.03, 0, 0]}
              //   material-color="green"
              onClick={(event) => console.log("thumb")}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
            />
            <PerspectiveCamera
              makeDefault={false}
              far={42.09}
              near={0.01}
              fov={35}
              position={[0.05, 0.17, -0.6]}
              rotation={[-3.02, 0.1, 3.13]}
            />
          </group>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-10, -10, 2]} intensity={1} />
          <mesh
            receiveShadow
            rotation-x={-Math.PI / 2}
            position={[0, -0.75, 0]}
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.2} />
          </mesh>
          <BakeShadows />
        </Suspense>
      </Canvas>
    </>
  );
};

export default HandVisualisatie;
