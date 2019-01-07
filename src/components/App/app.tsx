


import React, { Suspense } from "react";
/* testing the lazy loading component for React */
const Game = React.lazy(() => import("../Game/game.component"));

export const App = () => (

    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Game />
      </Suspense>
    </div>

);
