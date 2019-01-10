import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "inversify-react";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Switch
} from "react-router-dom";

import routes from "./routers";
import { container } from "./ioc/ioc";
import Nav from "./components/Nav/nav.componet";

ReactDOM.render(

    <Provider container={container}>
      <BrowserRouter>
        <div>
          <Nav />
          {routes}
        </div>
      </BrowserRouter>
    </Provider>
,
  document.getElementById("root")
);
