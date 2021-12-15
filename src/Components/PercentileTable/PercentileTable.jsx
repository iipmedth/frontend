import React from "react";

const PercentileTable = () => {
  let tableRows = [];
  let measurements = [
    "Hand Length",
    "Hand Width",
    "Fingertip distance of thumb to middle finger (1-3)",
    "Fingertip distance of middle finger and pinky (3-5)",
    "Span of thumb and index finger (1-2)",
    "Span of thumb and middle finger (1-3)",
    "Span of thumb and ring finger (1-4)",
    "Span of thumb and pinky (1-5)",
    "Span of index finger and middle finger (2-3)",
    "Span of index finger and ring finger (2-4)",
    "Span of index finger and pinky (2-5)",
    "Span of middle finger and ring finger (3-4)",
    "Span of middle finger and pinky  (3-5)",
    "Span of Middle finger and Ring finger (4-5)",
  ];

  measurements.map((item, index) => {
    tableRows.push(
      <tr className="percentileTable__row">
        <td className="percentileTable__row__item--lead">{item}</td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item">*</td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
        <td className="percentileTable__row__item"></td>
      </tr>
    );
  });
  return (
    <table className="percentileTable">
      {/* <tr className="percentileTable__head">
        <th className="percentileTable__head__item">Hand properties</th>
        <th className="percentileTable__head__item">Percentiles</th>
      </tr> */}
      {tableRows}
    </table>
  );
};

export default PercentileTable;
