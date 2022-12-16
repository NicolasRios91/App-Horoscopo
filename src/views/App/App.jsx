import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignView from "../Sign";
import CardListView from "../CardList";

const App = () => (
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

export default App;
