import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
// import ManageGuests from "./ManageGuests";
import HomePage from "./HomePage";
import PrintPreview from "./PrintPreview";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Teamsheets</Link>
        </header>

        <Router>
          <HomePage path="/" />

          {/* <PrintPreview path="/PrintPreview" /> */}
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
