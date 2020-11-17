import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Teamsheets</h1>
        <Selector />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
