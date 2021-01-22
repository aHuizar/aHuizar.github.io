import AboutMePic from "./../images/AboutMePic.jpg";
import React from "react";
import ThreeColumnPage from "./ThreeColumnPage";

function AboutMe() {
  return (
    <ThreeColumnPage
      title="About Me"
      column1={
        <React.Fragment>
          <img alt="Profile" className="img-fluid" src={AboutMePic} />
          <p className="font-italic">
            I excel at UI design, front end development, branding, and art
            direction. I am always excited to work on a project.
          </p>
        </React.Fragment>
      }
      column2={
        <React.Fragment>
          <h4>Me talking about myself</h4>
          <hr className="h-line"></hr>
          <p>
            I am a programmer, web designer, and front end developer from
            Bakersfield, California who loves coding. I will graduate with my
            Bachelor of Science in Electrical and Computer Engineering and
            Computer Science from Duke University in May of 2021.
          </p>
        </React.Fragment>
      }
      column3={
        <React.Fragment>
          <h4>Coding Proficiencies</h4>
          <hr className="h-line"></hr>
          <ul className="list-group">
            <li className="list-group-item text-dark">Java: 5 years</li>
            <li
              className="list-group-item text-dark" // eslint-disable-next-line
            >
              Javascript: 1 year
            </li>
            <li className="list-group-item text-dark">ReactJS: 1 year</li>
            <li className="list-group-item text-dark">C: 2 years</li>
            <li className="list-group-item text-dark">Python: 1 year</li>
          </ul>
        </React.Fragment>
      }
    />
  );
}

export default AboutMe;
