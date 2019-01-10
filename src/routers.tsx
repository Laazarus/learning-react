import { Route, Switch } from "react-router";
import React, { Suspense } from "react";
const Statistics = React.lazy(() =>
  import("./components/Statistics/statistics.component")
);
const App = React.lazy(() => import("./components/App/app"));
/* testing the lazy loading component for React */
const routes = (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/statistics" component={Statistics} />
    </Switch>
  </Suspense>
);

export default routes;
