import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Login from "./Login";
// import UserContext from './UserContext';
import { Router} from "@reach/router";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.StrictMode>
      {/* <UserContext.Provider> */}
        <div>
          <header></header>

          <Router >


            {/* <HomePage path="/"/> */}
            <HomePage path="/team/:teamId" />
            <Login path="/" /> 

          </Router>
        </div>
      {/* </UserContext.Provider> */}
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
