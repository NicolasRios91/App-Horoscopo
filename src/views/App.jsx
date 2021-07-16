import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "../models/loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SignView from "./SignView";
import CardListView from "./CardListView";
import fecthApi from "../api";
import { SET_DATA } from "../actions";

const App = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) {
      fecthApi()
        .then((dataResponse) => {
          dispatch(SET_DATA([Object.values(dataResponse.horoscopo)][0]));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
    }
  }, []);

  if (!loading) return <Loading />;

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
