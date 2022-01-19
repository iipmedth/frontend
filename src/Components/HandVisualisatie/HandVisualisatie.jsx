import React, { useRef, useState, useContext, useEffect } from "react";

// Three.js fiber
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
// Lightning
import Stage from "./Stage";
import "./handvisualisatie.scss";
// Data Context
import { DataContext } from "../../context/DataContext";

const HandVisualisatie = (props) => {
  // Data
  const {
    setSelectedFilter,
    patientHandPercentiles,
    patientMeasurements,
    selectedHand,
  } = useContext(DataContext);
  const property = props.property;
  // Model
  const group = useRef();
  const { nodes, materials } = useGLTF("/test.glb");
  useGLTF.preload("/test.glb");
  // States
  const [measurement, setMeasurement] = useState(null);
  const [percentile, setPercentile] = useState(null);
  const [dataTitle, setDataTitle] = useState(null);
  const [hover, setHover] = useState(null);
  const [fingerColor, setFingerColor] = useState([]);

  useEffect(() => {
    if (patientHandPercentiles) {
      const percentileData = Object.values(patientHandPercentiles);
      const indexPercentile = percentileData[property];
      setPercentile(indexPercentile);
    }

    if (patientMeasurements) {
      const measurementData = Object.values(patientMeasurements);
      const measurementTitle = Object.keys(patientMeasurements);
      const indexTitleRaw = measurementTitle[property + 4];
      const indexTitleClean = indexTitleRaw.replaceAll(/_/g, " ");
      const indexMeasurement = measurementData[property + 4];
      const roundedMeasurement = Math.round(indexMeasurement * 10) / 10;
      setMeasurement(roundedMeasurement);
      setDataTitle(indexTitleClean);
    }
  }, [property]);

  useEffect(() => {
    let newFingerArr = ["null", "null", "null", "null", "null"];
    if (patientHandPercentiles && dataTitle) {
      for (let i = 1; i < 6; i++) {
        if (dataTitle.includes(i)) {
          newFingerArr[i] = percentile;
          setFingerColor(newFingerArr);
        } else {
          setFingerColor(newFingerArr);
        }
      }
    }
  }, [dataTitle]);

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "auto";
  }, [hover]);

  const modelText = (
    <>
      Click on a finger to filter on its data.
      <span className="modelText--bold"> Filter on {hover} data?</span>
    </>
  );

  // Materials
  // Aurora 1 = Green
  // Aurora 2 = Light Green
  // Time Capsule = Orange
  // Hawaiian Passion 2 = Red
  // Vera = Pink/Skin

  return (
    <>
      <div className="model__wrapper">
        <div className="modelText">
          {hover !== null
            ? modelText
            : `Click on a finger to filter on its data.`}
        </div>
        <Canvas>
          <group
            className="model"
            ref={group}
            {...props}
            dispose={null}
            scale={selectedHand === "left" ? 17.09 : -17.09}
            position={selectedHand === "left" ? [0, -2, 0] : [-0.3, -2, 0]}
            onClick={(event) => setSelectedFilter(event.object.name)}
            rotation={[0, 6.1, Math.PI]}
            rotation={selectedHand === "left" ? [0, 135, 0] : [0, 6.1, Math.PI]}
            onPointerOver={(e) => (
              e.stopPropagation(), setHover(e.object.name)
            )}
            onPointerOut={(e) => e.intersections.length === 0 && setHover(null)}
          >
            <mesh
              name={"All fingers"}
              geometry={nodes.Hand_switchable.geometry}
              material={materials.Vera}
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Pinky"
              geometry={nodes.pinky_switchable.geometry}
              position={[0.03, 0, 0]}
              material={
                fingerColor[5] < 15 || fingerColor[5] > 90
                  ? materials["Hawaiian Passion 2"]
                  : fingerColor[5] <= 20 || fingerColor[5] >= 80
                  ? materials["Time Capsule"]
                  : fingerColor[5] > 20 || fingerColor[5] < 80
                  ? materials["Aurora 2"]
                  : fingerColor[5] === "null"
                  ? materials.Vera
                  : materials.Vera
              }
            />
            <mesh
              name="Ring finger"
              geometry={nodes.Ring_switchable.geometry}
              material={
                fingerColor[4] < 15 || fingerColor[4] > 90
                  ? materials["Hawaiian Passion 2"]
                  : fingerColor[4] <= 20 || fingerColor[4] >= 80
                  ? materials["Time Capsule"]
                  : fingerColor[4] > 20 || fingerColor[4] < 80
                  ? materials["Aurora 2"]
                  : fingerColor[4] === "null"
                  ? materials.Vera
                  : materials.Vera
              }
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Middle finger"
              geometry={nodes.middle_switchable.geometry}
              material={
                fingerColor[3] < 15 || fingerColor[3] > 90
                  ? materials["Hawaiian Passion 2"]
                  : fingerColor[3] <= 20 || fingerColor[3] >= 80
                  ? materials["Time Capsule"]
                  : fingerColor[3] > 20 || fingerColor[3] < 80
                  ? materials["Aurora 2"]
                  : fingerColor[3] === "null"
                  ? materials.Vera
                  : materials.Vera
              }
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Index finger"
              geometry={nodes.point_switchable.geometry}
              material={
                fingerColor[2] < 15 || fingerColor[2] > 90
                  ? materials["Hawaiian Passion 2"]
                  : fingerColor[2] <= 20 || fingerColor[2] >= 80
                  ? materials["Time Capsule"]
                  : fingerColor[2] > 20 || fingerColor[2] < 80
                  ? materials["Aurora 2"]
                  : fingerColor[2] === null
                  ? materials.Vera
                  : materials.Vera
              }
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Thumb"
              geometry={nodes.thumb_switchable.geometry}
              material={
                fingerColor[1] < 15 || fingerColor[1] > 90
                  ? materials["Hawaiian Passion 2"]
                  : fingerColor[1] <= 20 || fingerColor[1] >= 80
                  ? materials["Time Capsule"]
                  : fingerColor[1] > 20 || fingerColor[1] < 80
                  ? materials["Aurora 2"]
                  : fingerColor[1] === null
                  ? materials.Vera
                  : materials.Vera
              }
              material-opacity={0.9}
              position={[0.03, 0, 0]}
            />
          </group>
          <Stage />
        </Canvas>

        {dataTitle ? (
          <div className="modelData__wrapper">
            <div className="modelData__container">
              <div className="modelData">
                <span className="modelData--bold">Currently viewing: </span>
                {dataTitle}
              </div>
              <div className="modelData">
                <span className="modelData--bold">Measurement: </span>
                {measurement} mm
              </div>
              <div className="modelData">
                <span className="modelData--bold">Percentile: </span>
                {percentile}
              </div>
            </div>
          </div>
        ) : (
          <div className="modelData__wrapper">
            <div className="modelData__container">
              <div className="modelData">
                <span className="modelData--bold">
                  Select a hand property to view its data
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HandVisualisatie;
