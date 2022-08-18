import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "../../models/loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SignView from "../Sign";
import CardListView from "../CardList";
import { fetchAllSigns } from "../../api";
import { SET_DATA } from "../../actions";
import { selectFetchData } from "../../selectors";

const App = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector(selectFetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchedData;
    if (!data) {
      try {
        (async function () {
          fetchedData = await fetchAllSigns();
        })();
      } catch (error) {
        console.log("error", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
          if (fetchedData.length) {
            dispatch(SET_DATA(fetchedData));
          }
        }, 4000);
      }
    }
  }, [data, dispatch]);

  if (loading) return <Loading />;

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
