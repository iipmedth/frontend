import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const ExportButton = () => {
  return (
    <button className="exportButton">
      <UploadFileIcon sx={{ fontSize: 25, paddingRight: 1 }} />
      <span>Export to PDF</span>
    </button>
  );
};

export default ExportButton;
