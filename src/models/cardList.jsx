import React, { useState, useEffect } from "react";
import Card from "./card";
import imagesArray from "../utils/images";
import fecthApi from "../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_DATA } from "../actions";

const CardList = () => {
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
          dispatch(SET_DATA(dataResponse.horoscopo));
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
    <div className="app-cardList-container">
      {imagesArray.map((e) => {
        return <Card key={e.signName} sign={e}></Card>;
      })}
    </div>
  );
};

export default CardList;
