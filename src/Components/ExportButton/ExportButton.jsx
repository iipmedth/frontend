import React, { useContext } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import jsPDF from "jspdf";
import { DataContext } from "../../context/DataContext";
import "../../jspdf-font/Roboto-Regular";

const ExportButton = () => {
  const parseMil = (prefix, milimeterString) => {
    let parsedMil =
      prefix + ": " + String(parseFloat(milimeterString).toFixed(2)) + " mm";
    return parsedMil;
  };
  const { selectedPatient, patientMeasurements, patientHandPercentiles } =
    useContext(DataContext);
  const exportToPDF = () => {
    console.log(patientMeasurements);
    console.log(patientHandPercentiles);
    let doc = new jsPDF("p", "pt");
    doc.setFont("Roboto-Regular");
    doc.setFillColor(0, 170, 167);
    doc.rect(0, 0, 595, 30, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(20, 20, "Hand profile of " + selectedPatient.name);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.text(20, 50, parseMil("Hand Length", patientMeasurements.hand_length));

    doc.save("Hand profile " + selectedPatient.name + ".pdf");
  };
  return (
    <button className="exportButton" onClick={() => exportToPDF()}>
      <UploadFileIcon sx={{ fontSize: 25, paddingRight: 1 }} />
      <span>Export to PDF</span>
    </button>
  );
};

export default ExportButton;
