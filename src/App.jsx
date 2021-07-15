import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CardList from "./models/cardList";
import SignView from "./models/signView";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign">
          <SignView />
        </Route>
        <Route path="/">
          <CardList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
