import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectHoroscopeData } from "../../selectors";
import { Card } from "../../models/card";
import "./CardListView.css";

const CardListView = () => {
  const data = useSelector(selectHoroscopeData, shallowEqual);

  return (
    <>
      <header>
        <h1>HOROSCOPES</h1>
      </header>
      {data?.length ? (
        <div className="app-cardList-container">
          {data.map((sign) => (
            <Card key={sign.signName} sign={sign}></Card>
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Sorry, try again later</h3>
      )}
    </>
  );
};

export default CardListView;
