import { App } from "./components/App/app";
import { Route } from "react-router";
import React from "react";
import { Statistics } from "./components/Statistics/statistics.component";

const routes = (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/statistics" component={Statistics} />
  </div>
);

export default routes;
