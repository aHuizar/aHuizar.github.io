import AboutMePic from "./../images/AboutMePic.jpg";
import fbLogo from "./../images/facebookLogo.png";
import React from "react";
import ThreeColumnPage from "./ThreeColumnPage";
function AboutMe() {
  return (
    <ThreeColumnPage
      title="About Me"
      column1={<img alt="Me" className="img-fluid" src={AboutMePic} />}
      column2={
        <React.Fragment>
          <h4>Me talking about myself</h4>
          <hr className="h-line"></hr>
          <p className="font-italic">
            A web designer and front end developer from Bakersfield, California
            who loves coding.
          </p>
          <p>
            A whizz at website and UI design, front end development, branding,
            and art direction. Always excited to work on a project.
          </p>
          <a
            href="/"
            data-toggle="tooltip"
            data-placement="top"
            title="My Facebook Page"
          >
            <img
              alt="facebook logo"
              className="image-fluid dot-logo"
              src={fbLogo}
            />
          </a>
          <a
            href="/"
            data-toggle="tooltip"
            data-placement="top"
            title="Download Resume"
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-file-earmark-text-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 3a2 2 0 0 1 2-2h5.293a1 1 0 0 1 .707.293L13.707 5a1 1 0 0 1 .293.707V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm7 2V2l4 4h-3a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </React.Fragment>
      }
      column3={
        <React.Fragment>
          <div className="dot-big font-weight-bold">
            1
            <br />
            years
          </div>
          <p>
            X days
            <br />
            X hours
            <br />
            X minutes
            <br />
            X seconds
            <br />
            spent making websites
          </p>
        </React.Fragment>
      }
    />
  );
}

export default AboutMe;
