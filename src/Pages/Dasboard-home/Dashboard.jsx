import React from "react";
import reactDom from "react-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="row dashboard">
        <div className="col-lg-2 box">
          <Navbar />
          
        </div>
        <div className="col-lg"> 
            <h1 className="box">hi</h1>
        </div>
      </div>
    );
  }
}
