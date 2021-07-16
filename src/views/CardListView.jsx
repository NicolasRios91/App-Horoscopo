import React, { useState, useEffect } from "react";
import fecthApi from "../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_DATA } from "../actions";
import CardList from "../models/cardList";

const CardListView = () => {
  //TODO use effect in carlistView??
  const data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  !data
    ? fecthApi()
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((dataResponse) => {
          dispatch(SET_DATA([Object.values(dataResponse.horoscopo)][0]));
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {})
    : void 0; //WTF?????

  // useEffect(() => {
  //   fecthApi()
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((dataResponse) => {
  //       dispatch(SET_DATA(dataResponse.horoscopo));
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // if (loading) return null;

  return (
    <>
      <header>
        <h1>Tu Horóscopo</h1>
      </header>
      <CardList />
    </>
  );
};

export default CardListView;
