import React, { useContext } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import jsPDF from "jspdf";
import { DataContext } from "../../context/DataContext";
import "../../jspdf-font/Roboto-Regular";

const ExportButton = () => {
  const setLinePDF = (doc, x, y, prefix, milimeterString, percentile) => {
    if (
      (percentile >= 0 && percentile <= 10) ||
      (percentile >= 90 && percentile <= 100)
    ) {
      //red
      doc.setFillColor(250, 92, 92);
    } else if (
      (percentile <= 20 && percentile > 10) ||
      (percentile >= 80 && percentile < 90)
    ) {
      //orange
      doc.setFillColor(242, 165, 93);
    } else {
      //green
      doc.setFillColor(145, 193, 97);
    }
    let parsedText =
      prefix +
      " |  " +
      String(parseFloat(milimeterString).toFixed(2)) +
      " mm  |  Percentile: " +
      percentile;

    doc.circle(x, y - 5, 5, "F");
    doc.text(x + 10, y, parsedText);
  };
  const { selectedPatient, patientMeasurements, patientHandPercentiles } =
    useContext(DataContext);
  const exportToPDF = () => {
    let doc = new jsPDF("p", "pt");
    doc.setFont("Roboto-Regular");
    doc.setFillColor(0, 170, 167);
    doc.rect(0, 0, 595, 30, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(20, 20, "Hand profile of " + selectedPatient.name);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);

    setLinePDF(
      doc,
      20,
      50,
      "Hand Length",
      patientMeasurements.hand_length,
      patientHandPercentiles.hand_length
    );

    setLinePDF(
      doc,
      20,
      70,
      "Hand Breadth",
      patientMeasurements.hand_breadth,
      patientHandPercentiles.hand_breadth
    );

    setLinePDF(
      doc,
      20,
      90,
      "Height difference between thumb and middle finger (1-3)",
      patientMeasurements.height_difference_1_3,
      patientHandPercentiles.height_difference_1_3
    );

    setLinePDF(
      doc,
      20,
      110,
      "Height difference between middle finger and pinky (3-5)",
      patientMeasurements.height_difference_3_5,
      patientHandPercentiles.height_difference_3_5
    );

    setLinePDF(
      doc,
      20,
      130,
      "Span of thumb and index finger (1-2)",
      patientMeasurements.span_1_2,
      patientHandPercentiles.span_1_2
    );

    setLinePDF(
      doc,
      20,
      150,
      "Span of thumb and middle finger (1-3)",
      patientMeasurements.span_1_3,
      patientHandPercentiles.span_1_3
    );

    setLinePDF(
      doc,
      20,
      170,
      "Span of thumb and ring finger (1-4)",
      patientMeasurements.span_1_4,
      patientHandPercentiles.span_1_4
    );

    setLinePDF(
      doc,
      20,
      190,
      "Span of thumb and pinky (1-5)",
      patientMeasurements.span_1_5,
      patientHandPercentiles.span_1_5
    );

    setLinePDF(
      doc,
      20,
      210,
      "Span of index finger and middle finger (2-3)",
      patientMeasurements.span_2_3,
      patientHandPercentiles.span_2_3
    );

    setLinePDF(
      doc,
      20,
      230,
      "Span of index finger and middle finger (2-4)",
      patientMeasurements.span_2_4,
      patientHandPercentiles.span_2_4
    );

    setLinePDF(
      doc,
      20,
      250,
      "Span of index finger and ring finger (2-4)",
      patientMeasurements.span_2_4,
      patientHandPercentiles.span_2_4
    );

    setLinePDF(
      doc,
      20,
      270,
      "Span of index finger and pinky (2-5)",
      patientMeasurements.span_2_5,
      patientHandPercentiles.span_2_5
    );

    setLinePDF(
      doc,
      20,
      290,
      "Span of middle finger and ring finger (3-4)",
      patientMeasurements.span_3_4,
      patientHandPercentiles.span_3_4
    );

    setLinePDF(
      doc,
      20,
      310,
      "Span of middle finger and pinky (3-5)",
      patientMeasurements.span_3_5,
      patientHandPercentiles.span_3_5
    );

    setLinePDF(
      doc,
      20,
      330,
      "Span of middle finger and ring finger (4-5)",
      patientMeasurements.span_4_5,
      patientHandPercentiles.span_4_5
    );

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
