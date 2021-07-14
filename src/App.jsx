import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fecthApi from "./api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_DATA } from "./actions";
import CardList from "./models/cardList";

function App() {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fecthApi()
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((dataResponse) => {
        dispatch(SET_DATA(dataResponse.horoscopo));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return null;

  return (
    <div className="App">
      {console.log(data)}
      <CardList></CardList>
    </div>
  );
}

export default App;
