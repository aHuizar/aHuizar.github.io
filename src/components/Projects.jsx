import ThreeColumnPage from "./ThreeColumnPage";
import React from "react";
function Projects() {
  return (
    <ThreeColumnPage
      title="Projects"
      column2={
        <React.Fragment>
          <h4>Restaurant Website Demo </h4>
          <hr className="h-line"></hr>
          <p>
            I based this website off of a local restaurant called Umi Sushi &
            Sake. As such, the menu and theme of the actual restaurant are
            reflected in the website. The website was built using ReactJS. This
            website is only for demonstration purposes only, so there is no
            backend implementation to handle payment processing, user accounts,
            or form submissions.
          </p>
          <a
            rel="noreferrer"
            className="btn btn-primary"
            href="https://ahuizar.github.io/umi_sushi_demo"
            target="_blank"
          >
            Check it out here
          </a>
        </React.Fragment>
      }
      column1={
        <React.Fragment>
          <h4>E-Commerce Website Demo</h4>

          <p>Coming Soon</p>
        </React.Fragment>
      }
      column3={
        <React.Fragment>
          <h4>Class Project</h4>
          <p>Coming Soon</p>
        </React.Fragment>
      }
    />
  );
}

export default Projects;
