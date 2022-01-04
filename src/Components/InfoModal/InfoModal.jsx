import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const InfoModal = (props) => {
  const { modalVisible, setModalVisible } = useContext(DataContext);
  return (
    <div className={props.visible ? "infoModal" : "infoModal--invisible"}>
      <div className="infoModal__inner">
        <div className="infoModal__inner__head">
          <span className="infoModal__inner__head__title">How it works</span>
          <button
            onClick={() => setModalVisible(!modalVisible)}
            className="infoModal__inner__head__closeButton"
          >
            X
          </button>
        </div>
        <div className="infoModal__inner__body">
          <p>info sections</p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
