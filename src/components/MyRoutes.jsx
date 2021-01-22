import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function MyRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
}

export default MyRoutes;
