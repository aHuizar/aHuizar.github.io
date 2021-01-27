import React from "react";
function ThreeColumnPage(props) {
  return (
    <div className="container-fluid text-light mb-6">
      <div className="row justify-content-center ">
        <div className="col text-center">
          <h1 className="font-weight-huge">{props.title}</h1>
        </div>
      </div>
      <div className="row justify-content-around ">
        <div className="col-4 text-center">{props.column1}</div>
        <div className="col-4 text-center vll vlr">{props.column2}</div>
        <div className="col-4 text-center">{props.column3}</div>
      </div>
    </div>
  );
}

export default ThreeColumnPage;
