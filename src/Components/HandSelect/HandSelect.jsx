import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ReactComponent as LhandIcon } from "../../Static/images/LhandIcon.svg";
import { ReactComponent as RhandIcon } from "../../Static/images/RhandIcon.svg";
const HandSelect = () => {
  const { selectedHand, setSelectedHand } = useContext(DataContext);

  return (
    <div className="handSelect">
      <h1 className="handSelect__header">Select a hand to display data from</h1>
      <h2 className="handSelect__subHead">
        Selected: {selectedHand + " hand"}
      </h2>
      <LhandIcon
        onClick={() => setSelectedHand("left")}
        className={
          selectedHand === "left"
            ? "handSelect__select handSelect__select--active"
            : "handSelect__select"
        }
      />
      <RhandIcon
        onClick={() => setSelectedHand("right")}
        className={
          selectedHand === "right"
            ? "handSelect__select handSelect__select--active"
            : "handSelect__select"
        }
      />
    </div>
  );
};

export default HandSelect;
