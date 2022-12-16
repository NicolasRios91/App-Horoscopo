import "./App.css";
import React, { useEffect } from "react";
import Loading from "../../models/loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import SignView from "../Sign";
import CardListView from "../CardList";
import { selectHoroscopeData, selectIsLoading } from "../../selectors";
import { getHoroscopeFetch } from "../../features/horoscope";

const App = () => {
  const data = useSelector(selectHoroscopeData, shallowEqual);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getHoroscopeFetch());
    }
  }, [data, dispatch]);

  if (isLoading) return <Loading />;

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
