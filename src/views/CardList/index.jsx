import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectFetchData } from "../../selectors";
import CardList from "../../models/cardList";
import "./CardListView.css";
const CardListView = () => {
  const data = useSelector(selectFetchData, shallowEqual);

  return (
    <>
      <header>
        <h1>HOROSCOPES</h1>
      </header>
      {data?.length ? (
        <CardList />
      ) : (
        <h3 style={{ textAlign: "center" }}>Sorry, try again later</h3>
      )}
    </>
  );
};

export default CardListView;
