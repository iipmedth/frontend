import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const GraphInfoButton = () => {
  return (
    <button className="graphInfoButton">
      <InfoIcon sx={{ paddingRight: 0.5 }} />
      <span>How it works</span>
    </button>
  );
};

export default GraphInfoButton;
