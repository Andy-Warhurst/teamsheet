import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
        </header>

          <HomePage />

      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
