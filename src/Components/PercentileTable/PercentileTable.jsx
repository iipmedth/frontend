import React from "react";
import ReactTooltip from "react-tooltip";

const PercentileTable = (props) => {
  let tableRows = [];

  let measurements = [];
  if (props.percentiles) {
    measurements = [
      {
        name: "Hand Length",
        measure: props.percentiles.hand_length,
      },
      {
        name: "Hand Width",
        measure: props.percentiles.hand_breadth,
      },
      {
        name: "Fingertip distance of thumb to middle finger (1-3)",
        measure: props.percentiles.height_difference_1_3,
      },
      {
        name: "Fingertip distance of middle finger and pinky (3-5)",
        measure: props.percentiles.height_difference_3_5,
      },
      {
        name: "Span of thumb and index finger (1-2)",
        measure: props.percentiles.span_1_2,
      },
      {
        name: "Span of thumb and middle finger (1-3)",
        measure: props.percentiles.span_1_3,
      },
      {
        name: "Span of thumb and ring finger (1-4)",
        measure: props.percentiles.span_1_4,
      },
      {
        name: "Span of thumb and pinky (1-5)",
        measure: props.percentiles.span_1_5,
      },
      {
        name: "Span of index finger and middle finger (2-3)",
        measure: props.percentiles.span_2_3,
      },
      {
        name: "Span of index finger and ring finger (2-4)",
        measure: props.percentiles.span_2_4,
      },
      {
        name: "Span of index finger and pinky (2-5)",
        measure: props.percentiles.span_2_5,
      },
      {
        name: "Span of middle finger and ring finger (3-4)",
        measure: props.percentiles.span_3_5,
      },
      {
        name: "Span of middle finger and pinky  (3-5)",
        measure: props.percentiles.span_3_5,
      },
      {
        name: "Span of Middle finger and Ring finger (4-5)",
        measure: props.percentiles.span_4_5,
      },
    ];
  }

  const percentileChecker = (fixedPercentile, measure) => {
    //rounds to nearest 5
    let roundedInt =
      measure % 5 >= 2.5
        ? parseInt(measure / 5) * 5 + 5
        : parseInt(measure / 5) * 5;
    if (fixedPercentile == roundedInt) {
      return (
        <div>
          <ReactTooltip place="right" effect="solid" type="info" />
          <p data-tip={measure} className="percentileTable__row__item--active">
            ⚫
          </p>
        </div>
      );
    } else {
      return "";
    }
  };

  measurements.map((item, index) => {
    tableRows.push(
      <tr className="percentileTable__row">
        <td className="percentileTable__row__item--lead">{item.name}</td>
        <td className="percentileTable__row__item percentileTable__row__item--red">
          {percentileChecker(5, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--red">
          {percentileChecker(10, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--yellow">
          {percentileChecker(15, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--yellow">
          {percentileChecker(20, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(25, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(30, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(35, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(40, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(45, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(50, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(55, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(60, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(65, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(70, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--green">
          {percentileChecker(75, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--yellow">
          {percentileChecker(80, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--yellow">
          {percentileChecker(85, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--red">
          {percentileChecker(90, item.measure)}
        </td>
        <td className="percentileTable__row__item percentileTable__row__item--red">
          {percentileChecker(95, item.measure)}
        </td>
      </tr>
    );
  });

  return (
    <table className="percentileTable">
      <tr>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">10</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">20</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">30</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">40</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">50</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">60</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">70</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">80</td>
        <td className="percentileTable__header"></td>
        <td className="percentileTable__header">90</td>
        <td className="percentileTable__header"></td>
      </tr>
      {tableRows}
    </table>
  );
};

export default PercentileTable;
