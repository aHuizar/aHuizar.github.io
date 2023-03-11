import AboutMePic from "./../images/AboutMePic.jpg";
import React from "react";
import ThreeColumnPage from "./ThreeColumnPage";

function AboutMe() {
  return (
    <ThreeColumnPage
      title="About Me"
      column1={
        <div className="mt-4 mb-3">
          <img alt="Profile" className="img-fluid" src={AboutMePic} />
          <p className="font-italic">
            I excel at front end development, full stack development, and time
            management. I am always excited to work on a project.
          </p>
        </div>
      }
      column2={
        <div className="mt-4 mb-3">
          <h4>Me talking about myself</h4>
          <hr className="h-line"></hr>
          <p>
            I am a programmer, web designer, and front end developer from
            Bakersfield, California who loves coding. I graduated with my
            Bachelor of Science in Electrical and Computer Engineering and
            Computer Science from Duke University in May of 2021. I am always
            eager to learn new things!
          </p>
          <p>
            Currently, I am working as an Applications Engineer for Kern County.
            I have been working there since July 2021. I am also working on
            getting my AWS Certified Solutions Architect - Associate certification.
          </p>
        </div>
      }
      column3={
        <div className="mt-4 mb-3">
          <h4>Coding Proficiencies</h4>
          <hr className="h-line"></hr>
          <ul className="list-group">
            <li className="list-group-item text-dark">Java: 5 years</li>
            <li
              className="list-group-item text-dark" // eslint-disable-next-line
            >
              Javascript: 3 years
            </li>
            <li className="list-group-item text-dark">ReactJS: 2.5 years</li>
            <li className="list-group-item text-dark">C: 3 years</li>
            <li className="list-group-item text-dark">Python: 2 years</li>
            <li className="list-group-item text-dark">SQL: 2 years</li>
          </ul>
        </div>
      }
    />
  );
}

export default AboutMe;
