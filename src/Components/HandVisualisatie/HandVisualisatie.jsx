import React, { useRef, useState, useContext, useEffect } from "react";

// Three.js fiber
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stats } from "@react-three/drei";
import * as THREE from "three";

// Lightning
import Stage from "./Stage";

import "./handvisualisatie.scss";
// Data
import { DataContext } from "../../context/DataContext";

const HandVisualisatie = (props) => {
  // Data
  const {
    selectedFilter,
    setSelectedFilter,
    patientHandPercentiles,
    patientMeasurements,
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

  // States for colors in hand
  const [pinky, setPinky] = useState("null");
  const [ring, setRing] = useState("null");
  const [middle, setMiddle] = useState("null");
  const [index, setIndex] = useState("null");
  const [thumb, setThumb] = useState("null");

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
    if (patientHandPercentiles) {
      const percentileColors = Object.values(patientHandPercentiles);
      console.log(patientHandPercentiles);

      if (selectedFilter == "Thumb") {
        setIndex(percentileColors[4]);
        setMiddle(percentileColors[5]);
        setRing(percentileColors[6]);
        setPinky(percentileColors[7]);
      } else if (selectedFilter == "Index finger") {
        setIndex("null");
        setMiddle(percentileColors[8]);
        setRing(percentileColors[9]);
        setPinky(percentileColors[10]);
      } else if (selectedFilter == "Middle finger") {
        setIndex("null");
        setMiddle("null");
        setRing(percentileColors[11]);
        setPinky(percentileColors[12]);
      } else if (selectedFilter == "Ring finger") {
        setIndex("null");
        setMiddle("null");
        setRing("null");
        setPinky(percentileColors[13]);
      } else if (selectedFilter == "Pinky") {
        setIndex("null");
        setMiddle("null");
        setRing("null");
        setPinky("null");
      } else if (selectedFilter == "All fingers") {
        setThumb("null");
        setIndex("null");
        setMiddle("null");
        setRing("null");
        setPinky("null");
      }
    }
  }, [selectedFilter]);

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "auto";
  }, [hover]);

  // Materials
  // Aurora 1 = Green
  // Aurora 2 = Light Green
  // Time Capsule = Orange
  // Hawaiian Passion 2 = Red
  // Vera = Pink/SKin

  return (
    <>
      <div className="model__wrapper">
        <div className="modelText">
          {hover !== null
            ? `Click on the finger to filter on ${hover} data`
            : null}
        </div>
        <Canvas>
          <group
            className="model"
            ref={group}
            {...props}
            dispose={null}
            scale={17.09}
            position={[0, -2, 0]}
            onClick={(event) => setSelectedFilter(event.object.name)}
            rotation={[0, 135, 0]}
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
                pinky < 15 || pinky > 90
                  ? materials["Hawaiian Passion 2"]
                  : pinky <= 20 || pinky >= 80
                  ? materials["Time Capsule"]
                  : pinky > 20 || pinky < 80
                  ? materials["Aurora 2"]
                  : pinky == "null"
                  ? materials.Vera
                  : materials.Vera
              }
            />
            <mesh
              name="Ring finger"
              geometry={nodes.Ring_switchable.geometry}
              material={
                ring < 15 || ring > 90
                  ? materials["Hawaiian Passion 2"]
                  : ring <= 20 || ring >= 80
                  ? materials["Time Capsule"]
                  : ring > 20 || ring < 80
                  ? materials["Aurora 2"]
                  : ring == null
                  ? materials.Vera
                  : materials.Vera
              }
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Middle finger"
              geometry={nodes.middle_switchable.geometry}
              material={
                middle < 15 || middle > 90
                  ? materials["Hawaiian Passion 2"]
                  : middle <= 20 || middle >= 80
                  ? materials["Time Capsule"]
                  : middle > 20 || middle < 80
                  ? materials["Aurora 2"]
                  : middle == null
                  ? materials.Vera
                  : materials.Vera
              }
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Index finger"
              geometry={nodes.point_switchable.geometry}
              material={
                index < 15 || index > 90
                  ? materials["Hawaiian Passion 2"]
                  : index <= 20 || index >= 80
                  ? materials["Time Capsule"]
                  : index > 20 || index < 80
                  ? materials["Aurora 2"]
                  : index == null
                  ? materials.Vera
                  : materials.Vera
              }
              position={[0.03, 0, 0]}
            />
            <mesh
              name="Thumb"
              geometry={nodes.thumb_switchable.geometry}
              material={
                thumb < 15 || thumb > 90
                  ? materials["Hawaiian Passion 2"]
                  : thumb <= 20 || thumb >= 80
                  ? materials["Time Capsule"]
                  : thumb > 20 || thumb < 80
                  ? materials["Aurora 2"]
                  : thumb == null
                  ? materials.Vera
                  : materials.Vera
              }
              material-opacity={0.9}
              position={[0.03, 0, 0]}
            />
          </group>
          <Stage />
        </Canvas>
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
              <span className="modelData--bold">Percentile: </span> {percentile}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandVisualisatie;
