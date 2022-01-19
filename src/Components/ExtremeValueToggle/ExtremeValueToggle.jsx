import React, { useContext } from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import { DataContext } from "../../context/DataContext";

const ExtremeValueToggle = () => {
  const { extremeValueToggle, setExtremeValueToggle } = useContext(DataContext);
  return (
    <label className="extremeValueToggle">
      <Toggle
        defaultChecked={extremeValueToggle}
        onChange={() => setExtremeValueToggle(!extremeValueToggle)}
      />
      <span className="extremeValueToggle__text">
        Show only 'extreme' values
      </span>
    </label>
  );
};

export default ExtremeValueToggle;
