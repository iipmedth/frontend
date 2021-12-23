import React, { useContext } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { DataContext } from "../../context/DataContext";

const MeasurementDropdown = () => {
  const { setSelectedFilter } = useContext(DataContext);

  const options = [
    "All fingers",
    "Thumb",
    "Index finger",
    "Middle finger",
    "Ring finger",
    "Pinky",
  ];

  const changeHandler = (option) => {
    setSelectedFilter(option.value);
  };
  return (
    <div className="measurementDropdown">
      <span className="measurementDropdown__span">Select a finger:</span>
      <Dropdown
        options={options}
        defaultOption={options[0]}
        placeholder={options[0]}
        onChange={changeHandler}
        className="measurementDropdown__dropdown"
      />
    </div>
  );
};

export default MeasurementDropdown;
