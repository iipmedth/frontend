import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const InfoModal = (props) => {
  const { modalVisible, setModalVisible } = useContext(DataContext);
  return (
    <div className={props.visible ? "infoModal" : "infoModal--invisible"}>
      <div className="infoModal__inner">
        <div className="infoModal__inner__head">
          <h1 className="infoModal__inner__head__title">How it works</h1>
          <button
            onClick={() => setModalVisible(!modalVisible)}
            className="infoModal__inner__head__closeButton"
          >
            X
          </button>
        </div>
        <div className="infoModal__inner__body">
          <h2 className="infoModal__inner__body__header1">Percentile table</h2>
          <p>
            The percentile table shows the percentile group of a measurement,
            these percentile groups are defined by the amount of measurements
            collected from a certain comparison group. See the 'Data' block for
            more information of the comparison group.
          </p>
          <h2 className="infoModal__inner__body__header2">Colors</h2>
          <p>
            There are three different colors to be seen in the percentile table.
            These color define the <u>importance</u> of the measurement.
          </p>
          <br />
          <span style={{ backgroundColor: "#fa5c5c" }}>Red</span>
          <p>
            This is the most extreme percentile group, this means extra
            attention should be given to this measurement.
          </p>
          <br />
          <span style={{ backgroundColor: "#f2a55d" }}>Yellow</span>
          <p>
            This is a measurement that is not extreme but could also be the
            cause of problems, some extra attention should be given.
          </p>
          <br />
          <span style={{ backgroundColor: "#91c161" }}>Green</span>
          <p>
            This is considered a 'normal' measurement, no extra attention should
            be neccesarry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
