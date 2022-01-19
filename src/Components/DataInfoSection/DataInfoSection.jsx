import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const DataInfoSection = (props) => {
  let sex = props.patient.gender;
  //Cap first letter of sex/gender
  sex = sex ? sex[0].toUpperCase() + sex.substring(1) : "";

  const { dataEntryCount, selectedHand } = useContext(DataContext);

  return (
    <div className="dataInfo">
      <h1 className="dataInfo__header">Data</h1>
      <p className="dataInfo__text">
        Comparison group: {sex} | {selectedHand} hand
      </p>
      <p className="dataInfo__text">Data entries: {dataEntryCount} </p>
    </div>
  );
};

export default DataInfoSection;
