import React from "react";
import ReactLoading from "react-loading";
const LoadingOverlay = () => {
  return (
    <div className="loadingOverlay">
      <ReactLoading
        className="loadingOverlay__animation"
        type={"cylon"}
        color={"white"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
};

export default LoadingOverlay;
