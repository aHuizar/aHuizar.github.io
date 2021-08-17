import ThreeColumnPage from "./ThreeColumnPage";
import React from "react";
function Projects() {
  return (
    <ThreeColumnPage
      title="Projects"
      column2={
        <div className=" mt-4 mb-3">
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
        </div>
      }
      column1={
        <div className=" mt-4 mb-3">
          <h4>E-Commerce Website Demo</h4>
          <hr className="h-line"></hr>
          <p>Coming Soon</p>
        </div>
      }
      column3={
        <div className=" mt-4 mb-3">
          <h4>Class Project</h4>
          <hr className="h-line"></hr>
          <p>
            In the course ECE458: Engineering Software for Maintainability, I
            had to design a web app to help a hypothetical power company keep
            track of their models and instruments. This company had been
            managing their instruments with Excel spreadsheets, but this system
            proved to be difficult to manage. Thus, the company hired my team
            and I to design their web app. Over the course of the semester, the
            requirements and our software have evolved.
          </p>
          <a
            rel="noreferrer"
            className="btn btn-primary"
            href="https://github.com/Duc-Tran-98/ECE458_Project"
            target="_blank"
          >
            Check it out here
          </a>
        </div>
      }
    />
  );
}

export default Projects;
