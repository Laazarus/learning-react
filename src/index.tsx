import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "inversify-react";
import { BrowserRouter as Router } from "react-router-dom";

import routes from "./routers";
import { container } from "./ioc/ioc";

ReactDOM.render(
  <Provider container={container}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById("root")
);
