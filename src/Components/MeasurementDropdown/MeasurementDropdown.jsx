import React, { useContext } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { DataContext } from "../../context/DataContext";

const MeasurementDropdown = () => {
  const { setSelectedFilter, selectedFilter, selectedIndex } =
    useContext(DataContext);

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
        defaultOption={options[selectedFilter]}
        placeholder={options}
        onChange={changeHandler}
        value={selectedFilter}
        className="measurementDropdown__dropdown"
      />
    </div>
  );
};

export default MeasurementDropdown;
