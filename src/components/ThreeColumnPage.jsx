import React from "react";
function ThreeColumnPage(props) {
  return (
    <div
      className="container text-dark mb-5 bg-light rounded mt-4"
      style={{ overflowY: "auto" }}
    >
      <div className="row justify-content-center ">
        <div className="col text-center">
          <h1 className="font-weight-huge">{props.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg text-center">{props.column1}</div>
        <div className="col-lg text-center vll vlr">{props.column2}</div>
        <div className="col-lg text-center">{props.column3}</div>
      </div>
    </div>
  );
}

export default ThreeColumnPage;
