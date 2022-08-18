import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectFetchData } from "../../selectors";
import CardList from "../../models/cardList";
import "./CardListView.css";
const CardListView = () => {
  const data = useSelector(selectFetchData, shallowEqual);
  //TODO use effect in carlistView??
  // const data = useSelector((state) => state.dataReducer);
  // !data ? FecthApi() : void 0; //WTF?????

  console.log("la data", data);

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
