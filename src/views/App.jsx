import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignView from "./SignView";
import CardListView from "./CardListView";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign">
          <SignView />
        </Route>
        <Route path="/">
          <CardListView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
