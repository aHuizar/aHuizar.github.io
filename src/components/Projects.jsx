import ThreeColumnPage from "./ThreeColumnPage";
import React from "react";
function Projects() {
  return (
    <ThreeColumnPage
      title="Projects"
      column1={
        <React.Fragment>
          <h4>C1</h4>
        </React.Fragment>
      }
      column2={
        <React.Fragment>
          <h4>C2</h4>
          <hr className="h-line"></hr>
        </React.Fragment>
      }
      column3={
        <React.Fragment>
          <h4>C3</h4>
        </React.Fragment>
      }
    />
  );
}

export default Projects;
