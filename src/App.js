import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <h1>React minimal boilerplate with Rollup</h1>
      <HashRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};
export default App;
