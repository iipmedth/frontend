import React, { useContext } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { DataContext } from "../../context/DataContext";

const GraphInfoButton = () => {
  const { modalVisible, setModalVisible } = useContext(DataContext);
  return (
    <button
      onClick={() => setModalVisible(!modalVisible)}
      className="graphInfoButton"
    >
      <InfoIcon sx={{ paddingRight: 0.5 }} />
      <span>How it works</span>
    </button>
  );
};

export default GraphInfoButton;
