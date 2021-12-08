import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
const Model = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/test.glb");
  const [hovered, setHover] = useState(false);
  return (
    <>
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
          material-color={hovered ? "green" : "blue"}
          onClick={(event) => console.log("thumb")}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
          // material-color="green"
        />
      </group>
    </>
  );
};
useGLTF.preload("/test.glb");

export default Model;
