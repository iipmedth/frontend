import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Stage from "./Stage";
import { useGLTF, Stats } from "@react-three/drei";

import "./handvisualisatie.scss";

const HandVisualisatie = (...props) => {
  const group = useRef();
  useGLTF.preload("/test.glb");

  const [hover, setHover] = useState("random");
  const { nodes, materials } = useGLTF("/test.glb");
  const pinky = 75;
  return (
    <>
      <div className="modelText">{hover}</div>
      <Canvas>
        <Stats />
        <group
          ref={group}
          {...props}
          dispose={null}
          scale={17.09}
          position={[0, -2, 0]}
          onClick={(event) => console.log(event.object.name)}
          rotation={[0, 135, 0]}
          onPointerOver={(e) => (e.stopPropagation(), setHover(e.object.name))}
          onPointerOut={(e) => e.intersections.length === 0 && setHover("null")}
        >
          <mesh
            name={"hand"}
            geometry={nodes.Hand_switchable.geometry}
            material={materials.Vera}
            position={[0.03, 0, 0]}
          />
          <mesh
            name="pinky"
            geometry={nodes.pinky_switchable.geometry}
            material={materials["Hawaiian Passion 2"]}
            position={[0.03, 0, 0]}
            material-color={
              pinky < 15
                ? "red"
                : pinky <= 35
                ? "orange"
                : pinky >= 35
                ? "green"
                : "pink"
            }
          />
          <mesh
            name="ring finger"
            geometry={nodes.Ring_switchable.geometry}
            material={materials["Aurora 1"]}
            position={[0.03, 0, 0]}
          />
          <mesh
            name="middle finger"
            geometry={nodes.middle_switchable.geometry}
            material={materials["Aurora 2"]}
            position={[0.03, 0, 0]}
          />
          <mesh
            name="index finger"
            geometry={nodes.point_switchable.geometry}
            material={materials["Time Capsule"]}
            position={[0.03, 0, 0]}
          />
          <mesh
            name="thumb"
            geometry={nodes.thumb_switchable.geometry}
            material={materials.Aurora}
            position={[0.03, 0, 0]}
            material-color={hover ? "green" : "red"}
          />
        </group>
        <Stage />
      </Canvas>
    </>
  );
};

export default HandVisualisatie;
