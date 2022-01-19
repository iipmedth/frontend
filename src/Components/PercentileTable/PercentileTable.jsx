import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const PercentileTable = (props) => {
  let tableRows = [];
  const [selectedIndex, setSelectedIndex] = useState(null);
  let measurements = [];
  if (props.percentiles) {
    measurements = [
      {
        name: "Hand Length",
        measure: props.percentiles.hand_length,
        options: [
          "Thumb",
          "Index finger",
          "Middle finger",
          "Ring finger",
          "Pinky",
        ],
        rendered: false,
      },
      {
        name: "Hand Breadth",
        measure: props.percentiles.hand_breadth,
        options: [
          "Thumb",
          "Index finger",
          "Middle finger",
          "Ring finger",
          "Pinky",
        ],
        rendered: false,
      },
      {
        name: "Height difference between thumb and middle finger (1-3)",
        measure: props.percentiles.height_difference_1_3,
        options: ["Thumb", "Middle finger"],
        rendered: false,
      },
      {
        name: "Height difference between middle finger and pinky (3-5)",
        measure: props.percentiles.height_difference_3_5,
        options: ["Middle finger", "Pinky"],
        rendered: false,
      },
      {
        name: "Span of thumb and index finger (1-2)",
        measure: props.percentiles.span_1_2,
        options: ["Thumb", "Index finger"],
        rendered: false,
      },
      {
        name: "Span of thumb and middle finger (1-3)",
        measure: props.percentiles.span_1_3,
        options: ["Thumb", "Middle finger"],
        rendered: false,
      },
      {
        name: "Span of thumb and ring finger (1-4)",
        measure: props.percentiles.span_1_4,
        options: ["Thumb", "Ring finger"],
        rendered: false,
      },
      {
        name: "Span of thumb and pinky (1-5)",
        measure: props.percentiles.span_1_5,
        options: ["Thumb", "Pinky"],
        rendered: false,
      },
      {
        name: "Span of index finger and middle finger (2-3)",
        measure: props.percentiles.span_2_3,
        options: ["Index finger", "Middle finger"],
        rendered: false,
      },
      {
        name: "Span of index finger and ring finger (2-4)",
        measure: props.percentiles.span_2_4,
        options: ["Index finger", "Ring finger"],
        rendered: false,
      },
      {
        name: "Span of index finger and pinky (2-5)",
        measure: props.percentiles.span_2_5,
        options: ["Index finger", "Pinky"],
        rendered: false,
      },
      {
        name: "Span of middle finger and ring finger (3-4)",
        measure: props.percentiles.span_3_5,
        options: ["Middle finger", "Ring finger"],
        rendered: false,
      },
      {
        name: "Span of middle finger and pinky  (3-5)",
        measure: props.percentiles.span_3_5,
        options: ["Middle finger", "Pinky"],
        rendered: false,
      },
      {
        name: "Span of ring finger and pinky (4-5)",
        measure: props.percentiles.span_4_5,
        options: ["Ring finger", "Pinky"],
        rendered: false,
      },
    ];
  }

  const percentileChecker = (fixedPercentile, measure) => {
    //rounds to nearest 5
    let roundedInt =
      measure % 5 >= 2.5
        ? parseInt(measure / 5) * 5 + 5
        : parseInt(measure / 5) * 5;

    if (roundedInt > 95) {
      roundedInt = 95;
    }
    if (roundedInt < 5) {
      roundedInt = 5;
    }

    if (fixedPercentile === roundedInt) {
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

  const measurementClickHandler = (index) => {
    setSelectedIndex(index);
    props.changeIndex(index);
  };

  measurements.map((item, index) => {
    for (let option in item.options) {
      if (
        item.options[option] === props.selectedFilter ||
        (props.selectedFilter === "All fingers" && !item.rendered)
      ) {
        if (props.toggle) {
          if (item.measure <= 10 || item.measure >= 80) {
            item.rendered = true;
            tableRows.push(
              <tr key={index} className="percentileTable__row">
                <td
                  onMouseEnter={() => measurementClickHandler(index)}
                  className={
                    selectedIndex === index
                      ? "percentileTable__row__item__lead--active"
                      : "percentileTable__row__item__lead"
                  }
                >
                  {item.name}
                </td>
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
          }
        } else if (!props.toggle) {
          item.rendered = true;
          tableRows.push(
            <tr key={index} className="percentileTable__row">
              <td
                onMouseEnter={() => measurementClickHandler(index)}
                className={
                  selectedIndex === index
                    ? "percentileTable__row__item__lead--active"
                    : "percentileTable__row__item__lead"
                }
              >
                {item.name}
              </td>
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
        }
      }
    }
  });

  return (
    <table className="percentileTable">
      <thead className="percentileTable__header">
        <tr>
          <th>Hand Property</th>
          <th colSpan="19">Percentiles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">10</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">20</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">30</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">40</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">50</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">60</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">70</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">80</td>
          <td className="percentileTable__indicator"></td>
          <td className="percentileTable__indicator">90</td>
          <td className="percentileTable__indicator"></td>
        </tr>
        {tableRows}
      </tbody>
    </table>
  );
};

export default PercentileTable;
